using Microsoft.AspNetCore.Mvc;
using Web_Merchant.Models;
namespace Web_Merchant.Controllers;

public class AccountController : Controller
{
    // GET
    public IActionResult Sign_in()
    {
        return View();
    }
    
    [HttpPost]
    public IActionResult Sign_in(string phone, string password)
    {
        return RedirectToAction("Index", "Home");
    }
}

// if (user.email == "admin" && user.password == "admin")
// {
//     return RedirectToAction("Index", "Home");
// } 
// Console.WriteLine("Incorrect username or password");
// return View();