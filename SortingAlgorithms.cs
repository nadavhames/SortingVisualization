using System;
using System.Collections.Generic;

namespace SortingVisualization
{
    public static class SortingAlgorithms
    {
        public static List<(int, int)> BubbleSort<T>(T[] values) where T : IComparable
        {
            List<(int, int)> steps = new List<(int, int)>();
            var itemMoved = false;
            do
            {
                itemMoved = false;
                for (int i = 0; i < values.Length - 1; i++)
                {
                    if (values[i].CompareTo(values[i + 1]) > 0)
                    {
                        var lowerValue = values[i + 1];
                        values[i + 1] = values[i];
                        values[i] = lowerValue;
                        // Record which pair of indexes were swapped 
                        steps.Add((i, i + 1));
                        itemMoved = true;
                    }
                }
            } while (itemMoved);
            return steps;
        }
        
    }
}