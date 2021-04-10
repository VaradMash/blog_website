# blog_website

This repository contains the code for a blog website. The implementation details and user constraints are as follows.

## Problem Statement

-> Create a simple blog page using HTML or React with following components. 

->The Idea is to create a landing page where a client will be able to view all the blogs/content that we post on a regular basis.

->The task is to create a simple structure in which we will be hosting this data. 

-> The components:
  1. Featured image/Video
  2. Blog Title
  3. Blog Author (and image)
  4. Post Date
  5. Category
  6. Tags
  7. SEO Tags
  8. Blog Excerpt
  9. Social share links
  10.Read More Button

## Current Features : 
1. The Website contains 3 Pages : 
   a) Home Page : Contains Home, About Us, Contact Us sections.
   b) Blogs page: Displays all blogs posted on database.
   c) New Blog Page: Contains form for adding new blog.
   
## Snapshots : 
a) Home Page : 
  (i) Home Section : 
  
  ![image](https://user-images.githubusercontent.com/56042048/114264229-55ced900-9a07-11eb-84b0-7c0ce5ec6559.png)
  
  (ii) About Us : 
  
  ![image](https://user-images.githubusercontent.com/56042048/114264255-74cd6b00-9a07-11eb-9255-eb980af346b0.png)
  
  (iii) Contact Us :
  
  ![image](https://user-images.githubusercontent.com/56042048/114264275-8878d180-9a07-11eb-979e-8fc6be03ae62.png)

b) Blogs Page:
NOTE : For testing purpose, 2 Dummy blogs were added to the database(Firebase Firestore). Read More Functionality has been showcased for one of the blogs.

(i)

  ![image](https://user-images.githubusercontent.com/56042048/114264526-12756a00-9a09-11eb-872f-f45818dc6167.png)
(ii) Read More feature

![image](https://user-images.githubusercontent.com/56042048/114264543-26b96700-9a09-11eb-8268-a43cb83cb34f.png)


c) New Blogs Page :

  (i) Form filling : 
  
  ![image](https://user-images.githubusercontent.com/56042048/114264357-0d63eb00-9a08-11eb-906f-fa1439c6bb5a.png)
  
  (ii) Form Filling(2) : 
  
  ![image](https://user-images.githubusercontent.com/56042048/114264421-86634280-9a08-11eb-8255-1ea6e2c9b0db.png)
  
  (iii) Form Submission : 
  
  ![image](https://user-images.githubusercontent.com/56042048/114264436-98dd7c00-9a08-11eb-90ac-9a1d5860bf6f.png)
  
## User Constraints : 

1. The user can currently post a blog on the website without Authentication.
2. The website is recommended to be used on desktop browser.
3. The website is currently not hosted on any platform.

## Implementation Details :
(A) Front End Development : 
  1. HTML         : Document Structuring
  2. CSS          : Element Styling
  3. Javascipt    : Page behaviour
  4. Bootstrap    : Navbars and Card Views.
(B) Back End Development :
  1. Firebase Firestore for storing blogs
     Database Image : 
     ![image](https://user-images.githubusercontent.com/56042048/114264650-ba8b3300-9a09-11eb-860a-2ae7e07e5603.png)
  

## Future Scope :

1. Include Image in blog.
2. Improvement in User Interface.
3. Responsiveness.
4. Blog Author Image.
5. SEO Tags
6. Social Share Links.

## Distribution Details :

-> The website is currently not hosted on any platform.
-> Cloning the repository will not guarantee execution of some features as the node_modules directory has been excluded from the repository.
