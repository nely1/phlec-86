import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getAlbumOne, updateAlbum, deleteAlbum } from "../actions/album";
import ImageCarousel from "../components/ImageCarousel";
import TagInput from "../components/TagInput";
import TagViewOnly from "../components/TagViewOnly";
import "./AlbumViewPage.css";
import $ from "jquery";

// Code referenced from https://stackoverflow.com/questions/895171/prevent-users-from-submitting-a-form-by-hitting-enter
$(document).ready(function () {
  $(window).keydown(function (event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      return false;
    }
  });
});

export default function AlbumViewPage({ loginState }) {
  const albumId =
    window.location.pathname.split("/")[
      window.location.pathname.split("/").length - 1
    ];
  const album = useSelector((state) =>
    albumId ? state.album.find((a) => a._id === albumId) : null
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [sliderValue, setSliderValue] = useState(album?.score);

  // Hover effect referenced from https://bobbyhadz.com/blog/react-show-element-on-hover
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  useEffect(() => {
    dispatch(getAlbumOne(albumId));
  }, [dispatch, albumId]);

  async function fileSelectionHandler(event) {
    setImages([...images, await getBase64(event.target.files[0])]);
  }

  const [edit, setEdit] = useState(false);

  function changeEditState() {
    setEdit((prevEdit) => !prevEdit);
  }

  function deletePhoto(i) {
    if (images.length > 0) {
      images.splice(currentImageIndex, 1);
      setImages([...images]);
    }
  }

  function deleteAlbumFunc() {
    dispatch(deleteAlbum(albumId));
    navigate("/album");
  }

  useEffect(() => {
    setImages(album ? album.images : []);
    setTags(album ? album.labels : []);
  }, [album]);
  const [images, setImages] = useState(album ? album.images : []);
  const [tags, setTags] = useState(album ? album.labels : []);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [deleteConfirmation, setDeleteConfirmation] = useState(false);

  function handleSubmit(event) {
    changeEditState();
    event.preventDefault();
    const toUpdate = {
      name: event.target.viewName.value,
      score: event.target.viewRating.value,
      location: event.target.viewLocation.value,
      description: event.target.viewDescription.value,
      images: images,
      labels: tags,
      date: event.target.dateAlbum.value,
    };
    dispatch(updateAlbum(albumId, toUpdate));
  }
  const getBase64 = (file) =>
    //https://stackoverflow.com/questions/36280818/how-to-convert-file-to-base64-in-javascript
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  const history = useNavigate();
  useEffect(() => {
    if (!loginState) {
      history("/login");
    }
  }, [history, loginState]);

  // Prevents user from accessing page if not logged in, later redirected to login page in use effect
  // Prevents displaying webpage unitl albums are loaded from database
  if (!loginState || !album) {
    return <></>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="AlbumViewGrid">
        <div>
          <ImageCarousel
            images={images}
            setCurrentImageIndex={setCurrentImageIndex}
          ></ImageCarousel>
          {edit ? (
            <div className="AlbumViewButton3">
              <button
                type="button"
                onClick={deletePhoto}
                className="text3 AlbumViewDeletePhotoButton"
              >
                Delete Photo
              </button>
              <div className="AlbumViewPageAddPhoto">
                <label
                  htmlFor="addPhoto"
                  className="text3 AlbumViewPageAddPhotoText"
                >
                  Add photo +
                </label>

                <input
                  type="file"
                  id="addPhoto"
                  accept="image/*"
                  className="RecordPageInputPhoto"
                  onChange={fileSelectionHandler}
                ></input>
              </div>
            </div>
          ) : (
            <p></p>
          )}
        </div>
        {!edit ? (
          <div className="AlbumViewPageLeft">
            <h1>{album.name}</h1>
            <h3 className="RecordPageDescription">Description</h3>
            <textarea
              readOnly="readonly"
              className="RecordPageDescriptionInput"
              value={album.description}
            ></textarea>
            <h3>Tags:</h3>
            <TagViewOnly tags={tags} visable="true"></TagViewOnly>
            <h3>Location:</h3>
            <input
              className="RecordPageAlbumNameInput"
              type="text"
              value={album.location}
              readOnly="readonly"
            ></input>
            {isHovering ? (
              <h3 className="RecordPageTagTitle">{"Rating: " + sliderValue}</h3>
            ) : (
              <h3 className="RecordPageTagTitle">Rating</h3>
            )}
            <input
              className="AlbumViewPageRatingBar"
              type="range"
              min="0"
              max="10"
              value={album.score}
              readOnly="readonly"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
            ></input>
            <h3 className="RecordPageTagTitle">Date</h3>
            <input
              type="date"
              id="dateAlbum"
              name="dateAlbum"
              value={album.date}
              readOnly="readonly"
            ></input>
            <p> </p>
            <button
              onClick={changeEditState}
              className="text3 AlbumViewEditButton"
            >
              EDIT
            </button>
          </div>
        ) : (
          <div className="AlbumViewPageLeft">
            <input
              type="text"
              defaultValue={album.name}
              id="viewName"
              name="viewName"
              className="heading2"
            ></input>
            <h3 className="RecordPageDescription">Description</h3>
            <textarea
              className="RecordPageDescriptionInput"
              defaultValue={album.description}
              id="viewDescription"
              name="viewDescription"
            ></textarea>
            <h3>Tags:</h3>
            <TagInput tags={tags} setTags={setTags}></TagInput>
            <TagViewOnly tags={tags}></TagViewOnly>
            <h3>Location:</h3>
            <input
              className="RecordPageAlbumNameInput"
              type="text"
              defaultValue={album.location}
              id="viewLocation"
              name="viewLocation"
            ></input>
            {isHovering ? (
              <h3 className="RecordPageTagTitle">{"Rating: " + sliderValue}</h3>
            ) : (
              <h3 className="RecordPageTagTitle">Rating</h3>
            )}
            <input
              className="AlbumViewPageRatingBar"
              type="range"
              min="0"
              max="10"
              defaultValue={album.score}
              id="viewRating"
              name="viewRating"
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              onChange={(e) => setSliderValue(e.target.value)}
            ></input>
            <h3 className="RecordPageTagTitle">Date</h3>
            <input
              type="date"
              id="dateAlbum"
              name="dateAlbum"
              defaultValue={album.date}
            ></input>
            <p></p>
            <div className="LeftButtons">
              {deleteConfirmation ? (
                <>
                  <button
                    type="button"
                    className="text3 AlbumViewEditButton2"
                    onClick={() => setDeleteConfirmation(false)}
                  >
                    Cancel Delete
                  </button>
                  <button
                    type="button"
                    onClick={deleteAlbumFunc}
                    className="text3 AlbumViewDeleteAlbumButton"
                  >
                    Delete Confirm
                  </button>
                </>
              ) : (
                <>
                  <button
                    type="button"
                    onClick={() => setDeleteConfirmation(true)}
                    className="text3 AlbumViewDeleteAlbumButton"
                  >
                    Delete Album
                  </button>
                  <button type="submit" className="text3 AlbumViewEditButton2">
                    Save Edit
                  </button>
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </form>
  );
}
