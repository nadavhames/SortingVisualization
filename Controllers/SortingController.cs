using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace SortingVisualization.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class SortingController : ControllerBase
    {
        [HttpPost]
        public ActionResult<string> Sort([FromBody] SortingParams sortingParams)
        {
            string[] arr = sortingParams.input.Split(",");
            return JsonConvert.SerializeObject(arr);
        }
    }
}