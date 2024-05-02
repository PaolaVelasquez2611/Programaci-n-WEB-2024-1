import './AddProject.css'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, CardWrap, Header, Input } from '../../components';

export const AddProject = () => {

  const notify = () => {
      toast.success('Project created succesfully! 🚀 ', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
  }

  return (
    <main>
      <Header />
      <h3>UniteXperience</h3>
      <h1>Add New Project</h1>

      <section>
        <CardWrap className="wrap" image="https://t3.ftcdn.net/jpg/05/65/95/00/360_F_565950027_aojKCTkmD6IM5t4VHu9xwSgfoaArZxUc.jpg">
          <div className="children">
          <Input text="Work Title" placeholder="Enter work title"></Input>
          <Input text="Link" placeholder="Copy the embeded link here"></Input>
          <Input text="Tags" className="tall-input" placeholder="Add tags"></Input>
          <Input text="Upload Thumbnail" className="tall-input" placeholder="Add tags"></Input>
          <Input text="Work Desciption" className="tall-input" placeholder="Write here your Description"></Input>
          <Button onclick={notify} text={"Send"}></Button>
          </div>
        </CardWrap>
        <ToastContainer />
      </section>
    </main>
  )
}
