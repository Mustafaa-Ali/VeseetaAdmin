
import * as React from 'react';
import { useState, useEffect } from 'react';
import style from './EditCity.module.css';

import Swal from "sweetalert2";
import { db, auth } from '../../Firebase/Firebase';

import { useTranslation } from 'react-i18next';
function EditCity(props) {
  const { t } = useTranslation();
  const [data, setData] = useState(null);
  const [Name, setName] = useState('');


  console.log("props", props)

  function showAlert(message, icon) {
    Swal.fire({
      title: message,
      icon: icon,
      showConfirmButton: false,
      timer: 2000
    });
  }


  function close(e) {
    e.preventDefault();
    let EditCity = document.getElementById("edit_city");
    EditCity.classList.add("d-none");
  }

  const getOne = () => {
    const id = props.cityId;
    console.log("idd", id)
    db.collection("City")
      .doc(id)
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          console.log("dataaaaaaaaaaaaaaa", data)
          setData(data);
          setName(data.Name)
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });

  }

  const handleEditData = (event) => {
    event.preventDefault();

    if (props.cityId) {
      const id = props.cityId;
      db.collection("City")
        .doc(id)
        .update({
          Name: Name

        })
        .then(() => {
          console.log("Document successfully updated!");
          showAlert("Document successfully updated!", "success");
          let EditCity = document.getElementById("edit_city");
          EditCity.classList.add("d-none");
          props.fetchData();
        })
        .catch((error) => {
          console.error("Error updating document: ", error);
          showAlert("Error updating document", 'error')
        });
    }

  };

  useEffect(() => {
    if (props.cityId) {
      console.log("from useeffect")

      getOne();


    }


  }, [props.cityId]);

  return (
    <>
      {/* <SideBar /> */}
      <div className={`${style.contain}`}>
        <div className="row justify-content-center  mx-1 mb-5">
          <div className="col-lg-12 mb-4">
            <div className={` ${style.pull_left}`}>
              <h2>{t("edit")}</h2>
            </div>
          </div>

          <form className={`${style.create_accont}`} onSubmit={handleEditData}>

            <div className="row">
              <div className={` col-12`}>
                <button className={`${style.pull_right} fa-solid fa-square-xmark fs-4  text-danger`} style={{ border: "none" }} onClick={close}> </button>
              </div>

              <div className="col-12 mb-3">
                <div className="form-group">
                  <strong className='d-block mb-2'> {t("item_name")}:</strong>
                  <input type="text"
                    value={Name}
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                    className="form-control" placeholder={t("item_name")} />

                </div>
              </div>

              <div className="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" className={`btn ${style.btnCreate} mb-3`}>{t("submit")}</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default EditCity;


