using System.Web;
using System.Web.Optimization;

namespace SassyClub
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/sassy-scripts").Include(
                "~/assets/js/page.min.js",
                "~/assets/js/script.js",
                //"~/SassySite/SiteAssets/js/page.min.js", 
                //"~/SassySite/SiteAssets/js/script.js", 
                "~/SassySite/aaMyassets/js/bypassAPI.js", 
                "~/SassySite/aaMyassets/js/map.js"));




            bundles.Add(new StyleBundle("~/bundles/sassy-css").Include(
                "~/assets/css/page.min.css",
                "~/assets/css/style.css",
                //"~/SassySite/SiteAssets/css/page.min.css",
                //"~/SassySite/SiteAssets/css/style.css", 
                "~/SassySite/aaMyassets/css/myStyle.css"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                      "~/Scripts/jquery.validate*",
                      "~/Scripts/jquery.validate.unobtrusive.min.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at https://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/modernizr-*"));

            bundles.Add(new ScriptBundle("~/bundles/bootstrap").Include(
                      "~/Scripts/bootstrap.js",
                      "~/Scripts/respond.js"));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                      "~/Content/bootstrap.css",
                      "~/Content/site.css"));
        }
    }



}
