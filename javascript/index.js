function validate() {
    let email = document.getElementById("EMAIL ").value;
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("LNAME ").value;
    let twitter = document.getElementById("twitter ").value;
    let insta = document.getElementById("insta ").value;
    let em = /^[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]+$/
    let fn = /^[a-zA-Z]+/
    let tw = /^[a-zA-Z0-9_]{1,15}$/
    if (!em.test(email)) { alert("Enter valid Email!") }
    if (!fn.test(fname)) { alert("Enter valid first name") }
    if (!fn.test(lname)) { alert("Enter valid last name") }
    if (!tw.test(twitter)) { alert("Enter valid twitter id") }
    if (!tw.test(insta)) { alert("Enter valid insta id") }
}