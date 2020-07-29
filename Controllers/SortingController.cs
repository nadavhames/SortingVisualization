using System;
using System.Collections.Generic;
using System.Linq;
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
            string[] strings = sortingParams.input.Split(',');
            List<(int, int)> result = sortingParams.type == "Integer"
                ? Bubble(strings.Select(Int64.Parse).ToArray())
                : Bubble(strings);
            return JsonConvert.SerializeObject(result);
        }

        private List<(int, int)> Bubble<T>(T[] array) where T : IComparable
        {
            return SortingAlgorithms.BubbleSort(array);
        }
    }
}