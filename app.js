const db = firebase.firestore();
db.settings({ timestampsInSnaphsots: true });
const form = document.getElementById('new_blog_form');
const submit_button = document.getElementById('submit_button');
//Define month array
var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
//define date object
var date = new Date();


submit_button.onclick = function (event)
{
    //Prevent Default refresh routine.
    event.preventDefault();
    //Generate current date.
    const d = date.getDate().toString() + " " + months[date.getMonth()] + ", " +  date.getFullYear().toString();
    //Post data to database.
    db.collection('blogs').add({
      title: form.blog_title.value,
      post_date:d,
      tags: form.blog_tags.value,
      author: form.blog_author.value,
      category: form.blog_category.value,
      summary: form.blog_summary.value,
      content: form.blog_content.value
    })
    alert("Blog Posted Successfuly !");
}