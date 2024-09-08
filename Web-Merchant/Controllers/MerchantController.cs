using Microsoft.AspNetCore.Mvc;

namespace Web_Merchant.Controllers;

public class MerchantController : Controller
{
    public IActionResult Billing()
    {
        ViewData["ActivePage"] = "Billing";
        return View();
    }
    
    public IActionResult Edit_employee()
    {
        return View();
    }
    
    public IActionResult Employee()
    {
        ViewData["ActivePage"] = "Employee";
        return View();
    }
    
    public IActionResult Feedback()
    {
        ViewData["ActivePage"] = "Feedback";
        return View();
    }
    
    public IActionResult Menu()
    {
        ViewData["ActivePage"] = "Menu";
        return View();
    }
    
    public IActionResult Tables()
    {
        ViewData["ActivePage"] = "Tables";
        return View();
    }
    
    public IActionResult Warehouse()
    {
        ViewData["ActivePage"] = "Warehouse";
        return View();
    }
}
