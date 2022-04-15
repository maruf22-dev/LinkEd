import { useRouter } from 'next/router'
import React, { useState, useEffect } from 'react'
import styles from '../styles/Financial.module.css'
import axios_util from '../utils/axios_util'
import Carousel, { Modal, ModalGateway } from 'react-images'
import ImageUploading from 'react-images-uploading';




const Educational = () => {

  const [images, setImages] = useState([]);
  const [imagesRender, setImagesRender] = useState([]);
  const maxNumber = 50;

  const onChange = async (imageList, addUpdateIndex) => {
    console.log(imageList, addUpdateIndex);
    setImages(imageList);
    console.log(imageList);

    let result = [];
    for (let i = 0; i < imageList.length; i++) {
      result = [...result, { source: imageList[i].data_url }];
    }
    setImagesRender(result);
  };


  const [addPostVisibility, setAddPostVisibility] = useState(true);
  const [number, setNumber] = useState(null);
  const [description, setDescription] = useState("");
  const [posts, setPosts] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);



  useEffect(async () => {
    let response = await axios_util('/get-posts', { type: 'pp' });
    setPosts(response.array);
  }, [])


  const Router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.navbar}>
        <div className={styles.logo_box}>
          <img src="/demo_logo.png" alt="" onClick={() => {
            Router.push('/home');
          }} />
        </div>
      </div>
      {
        addPostVisibility &&
        <div className={styles.add_post}>
          <div className={styles.add_post_image}>
            <img src="/user_profile.jpg" alt="" onClick={() => {
              Router.push('/profile');
            }} />
          </div>
          <div className={styles.add_post_bar} onClick={() => {
            setAddPostVisibility(false);
          }}>
            <p>
              post here if you need partner to help with project
            </p>
          </div>
        </div>
      }


      {
        !addPostVisibility &&
        <div className={styles.add_post_container}>


          <div className={styles.add_description}>
            <p>
              description
            </p>
            <textarea
              placeholder='add your description here'
              spellCheck="false"
              onChange={(e) =>
                setDescription((v) => (e.target.validity.valid ? e.target.value : v))
              }
            />
          </div>
          <div className={styles.add_phone}>
            <p>
              Contact Number
            </p>
            <input
              type="text"
              pattern="[0-9]*"
              value={number}
              placeholder="Enter your Contact Number"
              spellCheck="false"
              onChange={(e) =>
                setNumber((v) => (e.target.validity.valid ? e.target.value : v))
              }
            />
          </div>

          {

            <ImageUploading
              multiple
              value={images}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey="data_url"
              width="100%"
            >
              {({
                imageList,
                onImageUpload,
                onImageRemoveAll,
                onImageUpdate,
                onImageRemove,
                isDragging,
                dragProps,
              }) => (
                <div className={styles.imageLoad}>
                  <p
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    Click or Drop here
                  </p>

                  <p onClick={onImageRemoveAll}>Remove all images</p>

                  {imageList.map((image, index) => (
                    <div key={index} className={styles.imageLoad_image}>
                      <img src={image['data_url']} alt="" />
                      <div className={styles.add_button_container}>
                        <p onClick={() => onImageUpdate(index)}>Update</p>
                        <p onClick={() => onImageRemove(index)}>Remove</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </ImageUploading>

          }
          <div className={styles.add_button_container}>

            <div onClick={() => {
              setAddPostVisibility(true);
              setNumber(0);
              setDescription("");
            }}>
              Discard
            </div>
            <div onClick={async () => {

              let newPost =
              {
                type: 'pp',
                description: description,
                number: number,
                postedById: 'jkasdkjasdjkj',
                postedByName: 'Md. Maruf Bin Salim',
                postedByImageLink: '/user_profile.jpg'
              }
              let newPosts = [];
              newPosts.push(newPost);
              for (let i = 0; i < posts.length; i++) newPosts.push(posts[i]);
              setPosts(newPosts);
              await axios_util('/add-post', newPost);
              setAddPostVisibility(true);
            }}>
              Post
            </div>
          </div>
        </div>
      }

      {
        addPostVisibility &&
        <div className={styles.blood_feed}>
          {
            (posts.length !== 0) &&
            posts.map((current, index) =>
              <div key={index} className={styles.post}>
                <div className={styles.post_top}>
                  <img src={current.postedByImageLink} alt="" onClick={() => {
                    Router.push('/visit-profile/' + current.postedById);
                  }} />
                  <img src="/messenger.jfif" alt="" onClick={() => {
                    Router.push('/messenger/' + current.postedById);
                  }} />
                  <p>
                    {current.postedByName}
                  </p>
                </div>
                <div className={styles.post_main}>
                  project partner needed
                </div>
                <div className={styles.post_description}>
                  {current.description}
                </div>
                <div className={styles.post_contact}>
                  You can contact me at : {current.number}
                </div>
                <div className={styles.post_contact} style={{ display: 'flex', justifyContent: 'center', cursor: 'pointer' }}>
                  <div onClick={() => { setModalIsOpen(true) }}> see images </div>
                </div>
              </div>
            )
          }

          {
            (imagesRender.length !== 0) &&
            <ModalGateway>
              {modalIsOpen ? (
                <Modal onClose={() => { setModalIsOpen(false) }}>
                  <Carousel views={imagesRender} />
                </Modal>
              ) : null}
            </ModalGateway>
          }
          {
            (posts.length === 0) &&
            <div className={styles.post_prompt}>
              There is no posts in the page.
            </div>
          }
        </div>

      }
    </div>
  )
}

export default Educational;