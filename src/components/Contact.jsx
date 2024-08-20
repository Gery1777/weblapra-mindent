import React, { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";
import Modal from "react-bootstrap/Modal";

function NotificationModal({ modalTitle, modalMessage, onClose }) {
  return (
    <>
      <div className="col-8 modal-container">
        <Modal.Header>
          <Modal.Title>{modalTitle}</Modal.Title>
        </Modal.Header>
        <hr></hr>
        <Modal.Body>
          {modalMessage.map((msg) => (
            <p style={{ margin: "0px" }}>{msg}</p>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
        </Modal.Footer>
      </div>
    </>
  );
}

function Contact() {
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const phoneRef = useRef(null);
  const emailAddressRef = useRef(null);
  const messageRef = useRef(null);

  useEffect(() => {
    emailjs.init("0hYc9Bpcy1KNIFrXe");
  }, []);

  function ToggleModal(isOpen) {
    const opacityContainer = document.getElementById("opacityContainer");
    isOpen
      ? opacityContainer.classList.add("opacity-container")
      : opacityContainer.classList.remove("opacity-container");
    setShowModal(isOpen);
  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    const serviceId = "service_ajzbge9";
    const templateId = "template_gb2qkjr";

    const formValues = {
      firstName: firstNameRef.current?.value || "",
      lastName: lastNameRef.current?.value || "",
      emailAddress: emailAddressRef.current?.value || "",
      phone: phoneRef.current?.value || "",
      message: messageRef.current?.value || "",
    };

    try {
      setLoading(true);
      //send email
      await emailjs.send(serviceId, templateId, {
        firstName: formValues.firstName,
        lastName: formValues.lastName,
        emailAddress: formValues.emailAddress,
        phone: formValues.phone,
        message: formValues.message,
      });
      //   reset HTML inputs
      document.getElementById("firstName").value = "";
      document.getElementById("lastName").value = "";
      document.getElementById("emailAddress").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("message").value = "";
      //alert user that email is sent
      ToggleModal(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      {showModal ? (
        <NotificationModal
          modalTitle="Köszönöm"
          modalMessage={[
            "Üzeneted megkaptam, amint tudok jelentkezem :)",
            "Üdv,",
            "Vivi",
          ]}
          onClose={() => ToggleModal(false)}
        ></NotificationModal>
      ) : null}
      <section className="contact bg-primary text-center" id="contact">
        <div className="container position-relative">
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <h2 className="mb-5">Írj nekünk</h2>
              <form
                id="contact_form"
                name="contact_form"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="mb-5 row contact-row">
                  <div className="col">
                    <label>Vezetéknév*</label>
                    <input
                      ref={lastNameRef}
                      type="text"
                      required
                      className="form-control"
                      id="lastName"
                      name="lastName"
                    ></input>
                  </div>
                  <div className="col">
                    <label>Keresztnév*</label>
                    <input
                      ref={firstNameRef}
                      type="text"
                      required
                      className="form-control"
                      id="firstName"
                      name="firstName"
                    ></input>
                  </div>
                </div>
                <div className="mb-5 row contact-row">
                  <div className="col">
                    <label>Email cím*</label>
                    <input
                      ref={emailAddressRef}
                      type="email"
                      required
                      className="form-control"
                      id="emailAddress"
                      name="emailAddress"
                    ></input>
                  </div>
                  <div className="col">
                    <label>Telefonszám</label>
                    <input
                      ref={phoneRef}
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                    ></input>
                  </div>
                </div>
                <div className="mb-5 contact-row">
                  <label>Üzenet*</label>
                  <textarea
                    ref={messageRef}
                    required
                    className="form-control"
                    id="message"
                    name="message"
                  ></textarea>
                </div>
                <div className="mt-2">
                  <button type="submit" className="btn btn-primary px-4 btn-lg">
                    Küldés
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
