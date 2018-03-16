using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(SassyClub.Startup))]
namespace SassyClub
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
