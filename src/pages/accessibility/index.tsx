import { Container, Layout } from "@/components/global";
// import { authService } from "../../services/authService";

const pageMeta = {
  title: "Our Committment to Accessibility",
  description: "TODO: Write meta descriptions",
};
const AccessibilityPage = () => {
  return (
    <Layout meta={pageMeta}>
      <Container>
        <div className="max-w-3xl m-auto mt-6 mb-24 prose">
          <h1>Our Committment to Accessibility</h1>

          <p>
            <span className="font-bold">Quick Note:</span> At the current time,
            this website is launched to its domain and is being built in public,
            but it is still heavily under construction and all final
            accessibility work is not complete at this time.
          </p>
          <p>
            It is the firm belief of SaveMyBrew.com that accessibility is not
            just a nice to have feature or legal requirement, but a fundamental
            human right. We live in a time of unprecedented information
            availability with the collective of human knowledge tucked away in
            most of our pockets, and everyone should have equal opportunity and
            ability to take advantage of this.
          </p>
          <p>
            This means we will do everything within our ability to ensure that
            accessibility is a primary consideration in all site features,
            development and updates. We select the third-party services and code
            deployed with careful consideration for accessibility and we will
            alwayws prioritize correcting or working around upstream issues
            where needed to ensure this goal is met.
          </p>
          <p>
            We also recognize that accessibility is a moving target and not a
            singular finish line and that we may not always get it right for
            every user due to the near infinite combination of abilities,
            devices, assistive tools, and assistive technologies. If you feel we
            have missed the mark in a way that negatively affected your
            experience using this site, please let us know by{" "}
            <a href="mailto: jody@savemybrew.com">sending us an email</a> or{" "}
            <a href="https://github.com/jodylecompte/savemybrew.com/issues/new">
              opening an issue
            </a>{" "}
            on GitHub.
          </p>
          <p>
            This website is developed by the community, to serve the community,
            and{" "}
            <a href="https://github.com/jodylecompte/savemybrew.com/">
              source code
            </a>{" "}
            is freely available. Pull requests are always appreciated.
          </p>
        </div>
      </Container>
    </Layout>
  );
};

export default AccessibilityPage;
