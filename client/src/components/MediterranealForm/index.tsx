"use client";
import * as yup from "yup";
import MainInput from "../MainInput";
import MainButton from "../MainButton";
import { useRef } from "react";
import { Formik, Field, Form } from "formik";
import GroupRadio from "../GroupRadio";

const MediterranealForm = () => {
  const InputRef = useRef<HTMLInputElement | null>(null);
  const InputRef2 = useRef<HTMLInputElement | null>(null);
  const InputRef3 = useRef<HTMLInputElement | null>(null);
  const InputRef4 = useRef<HTMLInputElement | null>(null);

  console.log(
    InputRef.current?.placeholder,
    InputRef2.current?.placeholder,
    InputRef3,
    InputRef4
  );

  const SignupSchema = yup.object().shape({
    questionOne: yup.string().required("جواب به این سوال الزامی است"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          questionOne: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          // same shape as initial values
          console.log(values, InputRef.current?.placeholder);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <h1>سوال اول</h1>
              <section className="flex items-center justify-between">
                <GroupRadio
                  name="questionOne"
                  value={"هیچ"}
                  header
                  title={"سوال اول"}
                />

                <GroupRadio
                  name="questionOne"
                  header={false}
                  value={"1-2"}
                  title={""}
                />

                <GroupRadio
                  name="questionOne"
                  header={false}
                  value={"2-3"}
                  title={""}
                />

                <GroupRadio
                  name="questionOne"
                  header={false}
                  value={"3-4"}
                  title={""}
                />
              </section>
              {errors.questionOne ? (
                <p className="text-red-600">
                  جواب دادن به سوال بالا الزامی است
                </p>
              ) : null}
            </div>

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default MediterranealForm;
