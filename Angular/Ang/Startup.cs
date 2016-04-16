using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(Ang.Startup))]
namespace Ang
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);

        }
    }
}
