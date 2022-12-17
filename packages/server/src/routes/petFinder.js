import express from 'express';
import { get } from 'axios';

const app = express();

const API_KEY = '6O1yH1zzLGDmlENbW6uULJrGLbVmQfjuNZ4tHyBANrRe74acnk';


// curl -d "grant_type=client_credentials&client_id=6O1yH1zzLGDmlENbW6uULJrGLbVmQfjuNZ4tHyBANrRe74acnk&client_secret=9EelnaFYpVkOM4xZWUmnxUjNo1iMrQMxVgwbycdY" https://api.petfinder.com/v2/oauth2/token


// curl -H "Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2TzF5SDF6ekxHRG1sRU5iVzZ1VUxKckdMYlZtUWZqdU5aNHRIeUJBTnJSZTc0YWNuayIsImp0aSI6IjIxMWVlNTEyMzMyYTllOTY4M2Q5OWUyZWU4MTkxHRG1sRU5iVzZ1VUxKckdMYlZtUWZqdU5aNHRIeUJBTnJSZTc0YWNuayIsImp0aSI6IjIxMWVlNTEyMzMyYTllOTY4M2Q5OWUyZWU4MTU4YjcyNDY5MWI0YzlmYTNmMGY3NjljZGZmZGI2M2E1MTBmYmY0OGUwNDJmODc1MjllMzEyIiwiaWF0IjoxNjcxMjYxNzA2LCJuYmYiOjE2NzEyNjE3MDYsImV4cCI6MTY3MTI2NTMwNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.dJ6cNyTVTZP9eohxjUAC5iFViX63VI5EElRbLuIK9Lr4f8sT9gOaOvBjrYFbStBQGJz9W2IxwujZElyt5wpTyY3zE0ky9Ix7KABofRwYL-wC074MTtFcgreY-4LnSRyoiLFItE0_MkSIecjTA3eWQ8a-PmyeP5JrTFOX1c1Y63cZ-7PYqS6njj3qIOZmnq7v3SLsqVvXwdbxZEgc2Ooe9o4M4-KP37ljSB0PRbgE_iziGhNu8PCQaTHsE-VyaY9nWEMIMDuzOFnOrPxw2f3RCUY6_lNadGvfuVjbnHNKh5eouSpLjoQYZo1CPk4xdePdt_MahwUyhjJux-M20JYrHQ" GET https://api.petfinder.com/v2/{CATEGORY}/{ACTION}?{parameter_1}={value_1}&{parameter_2}={value_2}



const apiKey = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI2TzF5SDF6ekxHRG1sRU5iVzZ1VUxKckdMYlZtUWZqdU5aNHRIeUJBTnJSZTc0YWNuayIsImp0aSI6IjIxMWVlNTEyMzMyYTllOTY4M2Q5OWUyZWU4MTU4YjcyNDY5MWI0YzlmYTNmMGY3NjljZGZmZGI2M2E1MTBmYmY0OGUwNDJmODc1MjllMzEyIiwiaWF0IjoxNjcxMjYxNzA2LCJuYmYiOjE2NzEyNjE3MDYsImV4cCI6MTY3MTI2NTMwNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.dJ6cNyTVTZP9eohxjUAC5iFViX63VI5EElRbLuIK9Lr4f8sT9gOaOvBjrYFbStBQGJz9W2IxwujZElyt5wpTyY3zE0ky9Ix7KABofRwYL-wC074MTtFcgreY-4LnSRyoiLFItE0_MkSIecjTA3eWQ8a-PmyeP5JrTFOX1c1Y63cZ-7PYqS6njj3qIOZmnq7v3SLsqVvXwdbxZEgc2Ooe9o4M4-KP37ljSB0PRbgE_iziGhNu8PCQaTHsE-VyaY9nWEMIMDuzOFnOrPxw2f3RCUY6_lNadGvfuVjbnHNKh5eouSpLjoQYZo1CPk4xdePdt_MahwUyhjJux-M20JYrHQ"}kxHRG1sRU5iVzZ1VUxKckdMYlZtUWZqdU5aNHRIeUJBTnJSZTc0YWNuayIsImp0aSI6IjIxMWVlNTEyMzMyYTllOTY4M2Q5OWUyZWU4MTU4YjcyNDY5MWI0YzlmYTNmMGY3NjljZGZmZGI2M2E1MTBmYmY0OGUwNDJmODc1MjllMzEyIiwiaWF0IjoxNjcxMjYxNzA2LCJuYmYiOjE2NzEyNjE3MDYsImV4cCI6MTY3MTI2NTMwNiwic3ViIjoiIiwic2NvcGVzIjpbXX0.dJ6cNyTVTZP9eohxjUAC5iFViX63VI5EElRbLuIK9Lr4f8sT9gOaOvBjrYFbStBQGJz9W2IxwujZElyt5wpTyY3zE0ky9Ix7KABofRwYL-wC074MTtFcgreY-4LnSRyoiLFItE0_MkSIecjTA3eWQ8a-PmyeP5JrTFOX1c1Y63cZ-7PYqS6njj3qIOZmnq7v3SLsqVvXwdbxZEgc2Ooe9o4M4-KP37ljSB0PRbgE_iziGhNu8PCQaTHsE-VyaY9nWEMIMDuzOFnOrPxw2f3RCUY6_lNadGvfuVjbnHNKh5eouSpLjoQYZo1CPk4xdePdt_MahwUyhjJux-M20JYrHQ'


app.get('/api/animals', (req, res) => {
  get('https://api.petfinder.com/v2/animals', {
    params: {
      type: req.query.type,
      location: req.query.location,
      api_key: API_KEY
    }
  })
  .then(response => {

    res.send(response.data);
  })
  .catch(error => {

    res.status(500).send(error);
  });
});

app.listen(3000, () => console.log('Server listening on port 3000'));
