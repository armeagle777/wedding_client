const AcceptSection = ({ onConfirm }) => {
  return (
    <>
      <div className="row ">
        <div className="col-lg-12">
          <div className="section-tittle tittle-form text-center">
            <img src="assets/img/memories/section_tittle_flowre.png" alt="" />
            <h2>Հաստատել մասնակցությունը</h2>
          </div>
        </div>
      </div>
      <div className="col-lg-12">
        <div className="submit-info">
          <button className="btn2" onClick={onConfirm}>
            ՀԱՍՏԱՏԵԼ
          </button>
        </div>
      </div>
    </>
  );
};

export default AcceptSection;
