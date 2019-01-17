using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using System.IO;

namespace coreSrv.Controllers
{
    
    public class PreRenderPageController : Controller
    {
        [HttpGet]
        [Route("{id:int}")]
        public IActionResult GetRes([FromRoute]int id)
        {
            var template = System.IO.File.ReadAllText("../dist/114514.html");
            var result = template.Replace("11451410", $"{id}10");
            return new ContentResult{StatusCode = 200, Content = result, ContentType = "text/html; charset=utf-8" };
        }
    }
}