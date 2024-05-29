import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { storage, db } from '../../services/firebase-config';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { v4 as uuidv4 } from 'uuid';
import { AddProjectContext } from './AddProjectContext';

export const AddProjectContextProvider = ({ children }) => {
    const [projectData, setProjectData] = useState({
        id: crypto.randomUUID(),
        title: '',
        description: '',
        tags: [],
        work_link: '',
        thumbnail: '',
        authors: []
      });
    
      const [thumbnailUpload, setThumbnailUpload] = useState(null);
      const [imagesUpload, setImagesUpload] = useState([]);
      const [loading, setLoading] = useState(false);
    
      const uploadProject = async () => {
        if (!thumbnailUpload) return;
    
        setLoading(true);
    
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
        } finally {
          setLoading(false);
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
    
      const handleTitleChange = (value) => {
        setProjectData({ ...projectData, title: value });
      };
    
      const handleDescriptionChange = (value) => {
        setProjectData({ ...projectData, description: value });
      };
    
      const handleWorkLinkChange = (value) => {
        setProjectData({ ...projectData, work_link: value });
      };
    
      const handleTagsChange = (tags) => {
        setProjectData({ ...projectData, tags });
      };
    
      const handleAuthorsChange = (authors) => {
        setProjectData({ ...projectData, authors });
      };
    
      const handleThumbnailUpload = (file) => {
        setThumbnailUpload(file);
      };
    
      const handleImagesUpload = (files) => {
        setImagesUpload(files);
      };
    
      return (
        <AddProjectContext.Provider value={{
            projectData,
            thumbnailUpload,
            imagesUpload,
            loading,
            uploadProject,
            handleTitleChange,
            handleDescriptionChange,
            handleWorkLinkChange,
            handleTagsChange,
            handleAuthorsChange,
            handleThumbnailUpload,
            handleImagesUpload
        }}
        >
        {children}
        </AddProjectContext.Provider>

      )
}