import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { useSelector } from "react-redux";

const AdminHome = () => {
  const { user } = useSelector((state) => state.auth);
  return (
    <Layout>
      <div className="container">
        <div className="d-felx flex-column mt-4">
          <h1>
            Welcome Admin <i className="text-success">{user?.name}</i>
          </h1>
          <h3>Manage Blood Bank App </h3>
          <hr />
          <p>
            A blood bank is a facility that collects, stores, and distributes blood and blood products.
            Blood banks are an essential part of the healthcare system, as they provide blood for patients 
            who need it for surgery, trauma, and other medical procedures. Blood banks collect blood from 
            blood donors. Donors must meet certain criteria, such as being in good health and not having any 
            infectious diseases. Once blood is collected, it is tested for diseases and then stored in a blood bank. 
            Blood banks typically store blood for up to 42 days. When a patient needs blood, they will go to a 
            hospital or clinic that has a blood bank. The hospital or clinic will contact the blood bank to request blood. 
            The blood bank will then send the blood to the hospital or clinic. Blood banks play an important role in the 
            healthcare system. They provide blood for patients who need it, and they help to ensure that there is a safe 
            and reliable supply of blood available.
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default AdminHome;
