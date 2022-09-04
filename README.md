# Documentation
# Introduction

The FreecourseAPI is built with node.js/express. This API is simple yet useful and a very much easy to use. With different route end points this API can return 'Free udemy courses, Datacamp and amazon coupons' from `real.discount API` . 
This can be very much useful for developers and mostly students who are wanting to create any personal project related to this API, mainly this one is helpful cause there are currently no exclusive official API that provides the Free Coupon of Udemy courses data.
This API returns a JSON object with all the details of courses like 'Course name','Price' and 'Url' as well.

## Use Cases

There are many use cases are possible, such as
- You can get the data of 10 FREE courses AND COUPONS each day and add the data to you personal website.
- Create an webpage where users can get 'Course URL' so that they don't have to look for many sites individually.


## Requests and Response

The API is not an RESTful API, there are no CURD operation available, it just takes an simple and cute `get` requests and returns you your wanted data.
Though with differenct route points requests you can specify what data you want the API to fetch.


This is the main API endpoints, obviously with the http: `https://freecoursesfetch.herokuapp.com/`
```http
GET //freecoursesfetch.herokuapp.com/
```
Then you can go on and add your specific routes.
Here are all the endpoints you can fetch the API from:
```http
GET //freecoursesfetch.herokuapp.com/courses
```
- fetches `Courses` and returs you a JSON, This JSON contains a object full of other courses for a total of 10 courses.
```http
GET //freecoursesfetch.herokuapp.com/courses/course1
```
- fetches only the `Course1 JSON`, which contains details like `Course Image`,`Course Price`,`Sale Price`,`Course Name`,`Course Url` and some more details like 'id' etc.
```http
GET //freecoursesfetch.herokuapp.com/courses/course2
```
- fetches only the `Course2 JSON` contains same details as `course 1`.

- Like above routes you can access total 10 routes upto `https://freecoursesfetch.herokuapp.com/courses/course9`. There you can get separate JSON for every course.
## Previews:
- Home route preview

![image](https://user-images.githubusercontent.com/85868593/188216345-a9fef90e-b698-4c22-b908-07621238fe78.png)

- `/courses` route preview

![image](https://user-images.githubusercontent.com/85868593/188216490-e965f1f9-54a7-4c3e-9df3-a1ea2253335c.png)

- Separate courses route previw i.e. `/course/course1`.

![image](https://user-images.githubusercontent.com/85868593/188216655-ae392bc6-f264-4aca-b5d3-46154541b81d.png)

## Responses

Here is `JavaSript` request format

```javascript
fetch("https://freecoursesfetch.herokuapp.com/")
  .then(response => data.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```
the `response` json will return so many things:


if you have done `console.log(result)` it will be in console though.
```javascript
fetch("https://freecoursesfetch.herokuapp.com/courses")
  .then(response => data.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```

```javascript
fetch("https://freecoursesfetch.herokuapp.com/courses/course1")
  .then(response => data.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```


```javascript
fetch("https://freecoursesfetch.herokuapp.com/courses/course2")
  .then(response => data.json())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
```



## Status Codes

FreecoursesAPI returns the following status codes in its API:

| Status Code | Description |
| :--- | :--- |
| 200 | `OK` |
| 400 | `BAD REQUEST` |
| 404 | `NOT FOUND` |
