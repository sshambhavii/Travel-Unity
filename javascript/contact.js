function validate() {
    let email = document.getElementById("email ").value;
    let fname = document.getElementById("author ").value;
    let com = document.getElementById("comment ").value;
    let web = document.getElementById("url ").value;
    let em = /^[a-zA-Z0-9+_.-]+@[a-z]+\.[a-z]+$/
    let fn = /^[a-zA-Z]+/
    let tw = /^[\w ]{10,250}$/
    let wb = /^((https?|ftp|smtp):\/\/)?(www.)?[a-z0-9]+\.[a-z]+(\/[a-zA-Z0-9#]+\/?)*$/
    if (!em.test(email)) { alert("Enter valid Email!") }
    if (!fn.test(fname)) { alert("Enter valid name") }
    if (!tw.test(com)) { alert("Enter valid comment") }
    if (!wb.test(web)) { alert("Enter valid URL") }
}