import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";

import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import ErrorMessage from '../components/ErrorMessage';

const validationSchema = Yup.object().shape({
  clientName: Yup.string().required().label("Client Name"),
  category: Yup.string().required().label("Category"),
  representative: Yup.string().required().label("Representative"),
  date: Yup.string().required().label("Creation Date"),
  address: Yup.string().required().label("Address"),
  email: Yup.string().required().email().label("Email"),
  phone: Yup.string().required().label("Phone"),
  bankAccount: Yup.string().required().label("Bank Account"),
});

function AddClient({ isOpen, closeModal }) {
  const handleAddClient = async (values) => {
    console.log(values);
  };

  return (
    <Modal closeModal={closeModal} isOpen={isOpen}>
      <h3 style={{ textAlign: "center" }}>Client</h3>
      <Formik
        initialValues={{
          clientName: "",
          category: "",
          representative: "",
          date: "",
          address: "",
          email: "",
          phone: "",
          bankAccount: "",
        }}
        onSubmit={(values) => handleAddClient(values)}
        validationSchema={validationSchema}
      >
        {({ handleChange, handleSubmit, setFieldTouched, touched, errors }) => (
          <div className="inputs-container">
            <div className="row">
              <label htmlFor="client">Client</label>
              <Input
                placeHolder={"Client name"}
                type={"text"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("clientName")}
              />
              { touched.clientName && <ErrorMessage text={errors.clientName}/> }
            </div>
            <div className="row">
              <label htmlFor="category">Category</label>
              <Input
                placeHolder={"Choose Category"}
                type={"text"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("category")}
              />
              { touched.category && <ErrorMessage text={errors.category}/> }
            </div>
            <div className="row">
              <label htmlFor="representative">Representative</label>
              <Input
                placeHolder={"Names"}
                type={"text"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("representative")}
              />
              { touched.representative && <ErrorMessage text={errors.representative}/> }
            </div>
            <div className="row">
              <label htmlFor="date">Date of Creation</label>
              <Input
                placeHolder={"Month & Year"}
                type={"date"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("date")}
              />
              { touched.date && <ErrorMessage text={errors.date}/> }
            </div>
            <div className="row">
              <label htmlFor="address">Address</label>
              <Input
                placeHolder={"Province, District, Sector, Cell"}
                type={"text"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("address")}
              />
              { touched.address && <ErrorMessage text={errors.address}/> }
            </div>
            <div className="row">
              <label htmlFor="email">Email</label>
              <Input
                placeHolder={"Email address"}
                type={"email"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("email")}
              />
              { touched.email && <ErrorMessage text={errors.email}/> }
            </div>
            <div className="row">
              <label htmlFor="phone">Phone</label>
              <Input
                placeHolder={"Phone"}
                type={"tel"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("phone")}
              />
              { touched.phone && <ErrorMessage text={errors.phone}/> }
            </div>
            <div className="row">
              <label htmlFor="bank">Bank Account {`(IBAN)`}</label>
              <Input
                placeHolder={"Bank Account"}
                type={"text"}
                width={100}
                onChange={handleChange}
                onBlur={() => setFieldTouched("bankAccount")}
              />
              { touched.bankAccount && <ErrorMessage text={errors.bankAccount}/> }
            </div>
            <div
              className="row"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                text={"Add Client"}
                width={50}
                onClick={handleSubmit}
                type={"submit"}
              />
            </div>
          </div>
        )}
      </Formik>
    </Modal>
  );
}

export default AddClient;
