import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
   
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="First Name">
            First name : <br />
      <input {...register("firstName", { required: true, maxLength: 20 })} />
        </label>
      
      <br />

      <label htmlFor="Last Name">
            Last name : <br />
      <input {...register("lastName", { required: true, maxLength: 20 })} />
        </label>
        <br />

        <label htmlFor="Age">
            Age : <br />
      <input {...register("age", { min: 18, max: 99 })} />
    
        </label>

<br />
<label htmlFor="Email">
            Email : <br />
      <input {...register("email")} />
        </label>
        <br />
        <br />
      
      <input type="submit" />
    </form>
  );
}
