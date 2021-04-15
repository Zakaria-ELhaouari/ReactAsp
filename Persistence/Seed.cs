using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Domain;

namespace Persistence
{
    public class Seed
    {
        public static async Task SeedData(DataContext context)
        {
            if(context.Avtivities.Any()) return;

            var activities = new List<Avtivity>
            {
                new Avtivity{
                    Title = "Past Activity 1",
                    Date = DateTime.Now.AddMonths(-2),
                    Description = "Activity 2 month ago",
                    Categorie = "drinks",
                    City = "London",
                    Venue = "Pub",
                },
                new Avtivity{
                    Title = "Past Activity 2",
                    Date = DateTime.Now.AddMonths(-1),
                    Description = "Activity 1 month ago",
                    Categorie = "drinks",
                    City = "Marrakech",
                    Venue = "Pub",
                }
            };

            await context.Avtivities.AddRangeAsync(activities);

            await context.SaveChangesAsync();
        }
    }
}