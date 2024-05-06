import MediterranealForm from "@/components/MediterranealForm";

const DietsPanel = () => {
  return (
    <div className="flex flex-col gap-7">
      <div className="collapse bg-[var(--rating-color)]">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-white text-xl font-medium">
          رژیم مدیترانه ای
        </div>
        <div className="collapse-content">
          <MediterranealForm/>
        </div>
      </div>
      <div className="collapse bg-[var(--rating-color)]">
        <input type="radio" name="my-accordion-1" defaultChecked />
        <div className="collapse-title text-white text-xl font-medium">
          رژیم مدیترانه ای
        </div>
        <div className="collapse-content text-white">
          <p>hello</p>
        </div>
      </div>
      
    </div>
  );
};

export default DietsPanel;
