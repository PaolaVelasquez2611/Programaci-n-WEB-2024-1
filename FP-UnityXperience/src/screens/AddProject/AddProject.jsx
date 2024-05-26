import './AddProject.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, CardWrap, Input, TagInput } from '../../components';
import { useState } from 'react';
import { storage, db } from '../../services/firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';

export const AddProject = () => {
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    tags: [],
    work_link: '',
    thumbnail: '',
    authors: []
  });

  const [thumbnailUpload, setThumbnailUpload] = useState(null);
  const [imagesUpload, setImagesUpload] = useState([]);
  const [tags, setTags] = useState([]);
  const [authors, setAuthors] = useState([]);

  const uploadProject = async () => {
    if (!thumbnailUpload) return;

    const thumbnailRef = ref(storage, `images/${thumbnailUpload.name + uuidv4()}`);
    await uploadBytes(thumbnailRef, thumbnailUpload);
    const thumbnailUrl = await getDownloadURL(thumbnailRef);

    const imagesUrls = [];
    for (let i = 0; i < Math.min(imagesUpload.length, 3); i++) {
      const image = imagesUpload[i];
      const imageRef = ref(storage, `images/${image.name + uuidv4()}`);
      await uploadBytes(imageRef, image);
      const imageUrl = await getDownloadURL(imageRef);
      imagesUrls.push(imageUrl);
    }

    const updatedProjectData = {
      ...projectData,
      thumbnail: thumbnailUrl,
      images: imagesUrls
    };

    try {
      await db.collection('projects').add(updatedProjectData);
      notify();
    } catch (error) {
      console.error('Error adding project: ', error);
    }
  };

  const notify = () => {
    toast.success('Project created successfully! 🚀', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <main>
      <h3>UniteXperience</h3>
      <h1>Add New Project</h1>
      <section>
        <CardWrap className="wrap" image="https://t3.ftcdn.net/jpg/05/65/95/00/360_F_565950027_aojKCTkmD6IM5t4VHu9xwSgfoaArZxUc.jpg">
          <div className="children">
            <Input 
              text="Work Title" 
              placeholder="Enter work title" 
              onChange={(e) => setProjectData({ ...projectData, title: e.target.value })} />
              <Input 
                text="Work Description" 
                className="tall-input" 
                placeholder="Write your description here" 
                onChange={(e) => setProjectData({ ...projectData, description: e.target.value })} />
            <Input 
              text="Link" 
              placeholder="Copy the embeded link here" 
              onChange={(e) => setProjectData({ ...projectData, work_link: e.target.value })} />
            <TagInput 
              labelText={"Enter tags"}
              tags={projectData.tags} 
              setTags={(tags) => setProjectData({ ...projectData, tags })} />
            <TagInput
              labelText={"Authors"} 
              tags={projectData.authors} 
              setTags={(authors) => setProjectData({ ...projectData, authors })} />
            <Input 
              text={"Upload your thumbnail"}
              type="file" 
              className='tall-input'
              id="file-input"
              onChange={(e) => setThumbnailUpload(e.target.files[0])} />
            <Input 
              text={"Upload the images of your project"}
              type="file" 
              className='tall-input' 
              multiple={true}
              onChange={(e) => setImagesUpload(e.target.files)} />
            <Button 
              onClick={uploadProject} 
              text="Send" />
          </div>
        </CardWrap>
        <ToastContainer />
      </section>
    </main>
  );
};
