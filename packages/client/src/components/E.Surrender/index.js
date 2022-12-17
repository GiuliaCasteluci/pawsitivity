// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// function PetForm() {
//   const [formValues, setFormValues] = useState({
//     petType: '',
//     name: '',
//     age: '',
//     sex: '',
//     image: null
//   });
//   const navigate = useNavigate();

//   function handleChange(event) {
//     const { name, value, files } = event.target;
//     setFormValues({
//       ...formValues,
//       [name]: files ? files[0] : value
//     });
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//     // send the form values to the emergency page


//     navigate('/emergency', { state: { pet: formValues } });
    
    
//   }

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Pet Type:
//         <input type="text" name="petType" value={formValues.petType} onChange={handleChange} />
//       </label>
//       <label>
//         Name:
//         <input type="text" name="name" value={formValues.name} onChange={handleChange} />
//       </label>
//       <label>
//         Age:
//         <input type="text" name="age" value={formValues.age} onChange={handleChange} />
//       </label>
//       <label>
//         Sex:
//         <input type="text" name="sex" value={formValues.sex} onChange={handleChange} />
//       </label>
//       <label>
//         Image:
//         <input type="file" name="image" onChange={handleChange} />
//       </label>
//       <button type="submit">Submit</button>
//     </form>
//   );
// }


// export default PetForm;