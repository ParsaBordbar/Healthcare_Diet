import MainInput from "../MainInput";

const MediterranealForm = () => {
  return (
    <form action="" className="w-3/4 mx-auto">
      <div className="flex flex-col gap-3">
        <h1 className="text-white">سوال اول:</h1>
        <section className="flex justify-between">
          <div className="flex items-center gap-2 flex-row-reverse">
            <label className="text-white" htmlFor="a1">
              هیچ
            </label>
            <input type="radio" id="a1" name="radio-1" className="radio" />
          </div>
          <div className="flex items-center gap-2 flex-row-reverse">
            <label className="text-white" htmlFor="a2">
              هیچ
            </label>
            <input type="radio" id="a2" name="radio-1" className="radio"  />
          </div>
          <div className="flex items-center gap-2 flex-row-reverse">
            <label className="text-white" htmlFor="a3">
              هیچ
            </label>
            <input type="radio" id="a3" name="radio-1" className="radio"  />
          </div>
          <div className="flex items-center gap-2 flex-row-reverse">
            <label className="text-white" htmlFor="a4">
              هیچ
            </label>
            <input type="radio" id="a4" name="radio-1" className="radio"  />
          </div>
        </section>
      </div>
    </form>
  );
};

export default MediterranealForm;
