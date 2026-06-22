//Firt create class LoginPage
class LoginPage{ 

    //Then create contructor for that page and write locators inside that using "this" keyword
    constructor(page){
        //this.page=page should be written after constructor

        this.page=page;
        this.username='#user-name';
        this.password='#password';
        this.loginButton='#login-button';
    }
    //Create methods
    async login(data) {
        await this.page.fill(this.username,data.username)
        await this.page.fill(this.password,data.password)
        await this.page.click(this.loginButton)
    }
}
//export used share loginpage objects with other pages
module.exports=LoginPage