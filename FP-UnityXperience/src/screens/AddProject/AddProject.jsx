import './AddProject.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Input, TagInput } from '../../components';
import { Loader } from '../../components/Loader/Loader';
import { CardWrap2 } from '../../components/CardWrap2/CardWrap2';
import { Background } from '../../components/Background/Background';
import { useAddProject } from '../../hooks/useAddProject';

export const AddProject = () => {
  const {
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
  } = useAddProject(); 

  return (
    <main>
      <Background></Background>
      <div className='title-div'>
        <h3 className="heading-addproject-3">UniteXperience</h3>
        <h1 className="heading-addproject-1">Add New Project</h1>
      </div>
      <section>
        <CardWrap2 className="wrap" image="https://t3.ftcdn.net/jpg/05/65/95/00/360_F_565950027_aojKCTkmD6IM5t4VHu9xwSgfoaArZxUc.jpg">
          <div className="children">
            <Input 
              text="Work Title" 
              placeholder="Enter work title" 
              value={projectData.title}
              onChange={(e) => handleTitleChange(e.target.value)} />
            <Input 
              text="Work Description" 
              className="tall-input" 
              placeholder="Write your description here" 
              value={projectData.description}
              onChange={(e) => handleDescriptionChange(e.target.value)} />
            <Input 
              text="Link" 
              placeholder="Copy the embedded link here" 
              value={projectData.work_link}
              onChange={(e) => handleWorkLinkChange(e.target.value)} />
            <TagInput 
              labelText={"Enter tags"}
              tags={projectData.tags} 
              setTags={handleTagsChange} />
            <TagInput
              labelText={"Authors"} 
              tags={projectData.authors} 
              setTags={handleAuthorsChange} />
            <Input 
              text={"Upload your thumbnail"}
              type="file" 
              className='tall-input'
              id="file-input"
              onChange={(e) => handleThumbnailUpload(e.target.files[0])} />
            <Input 
              text={"Upload the images of your project"}
              type="file" 
              className='tall-input' 
              multiple={true}
              onChange={(e) => handleImagesUpload(e.target.files)} />
            <Button 
              onClick={uploadProject} 
              text="Send" />
            {loading && <Loader/>}
          </div>
        </CardWrap2>
        <ToastContainer />
      </section>
    </main>
  );
};