import { useFormik, Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from 'yup';

function YupValidationComponent() {
    return (
        <div className="container-fluid">
            <h2>Register Users</h2>
            <Formik initialValues={
                {
                    UserName: '',
                    Email: '',
                    Age:'',
                    City:''
                }}
                validationSchema={
                    yup.object({
                        UserName: yup.string().min(4,'Name too short').max(10,'Name otoo long').required('Name Required'),
                        Email: yup.string().email('Invalid Email').required('Email Required'),
                        Age: yup.number().required('Age Required'),
                        City: yup.string()
                    })
                }
                onSubmit={
                    values=>{
                        alert(JSON.stringify(values))
                    }
                }
                >
               {
                fields =>
                    <Form>
                    {
                        <div>
                            <dl>
                                <dt>User Name</dt>
                                <dd><Field name="UserName" type="text"></Field></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="UserName"></ErrorMessage>
                                </dd>
                                <dt>Email</dt>
                                <dd><Field name="Email" type="text"></Field></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Email"></ErrorMessage>
                                </dd>
                                <dt>Age</dt>
                                <dd><Field name="Age" type="number"></Field></dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Age"></ErrorMessage>
                                </dd>
                                <dt>City</dt>
                                <dd><Field name="City" as="select">
                                         <option>Delhi</option>
                                         <option>Hydrebad</option>
                                         <option>Mumbai</option>
                                         <option>Pune</option>
                                    </Field></dd>
                            </dl>
                            <button disabled={(fields.isValid)?false:true}>Register</button>
                        </div>
                    }
                </Form>
               }
            </Formik>
        </div>
    )
}
export default YupValidationComponent;