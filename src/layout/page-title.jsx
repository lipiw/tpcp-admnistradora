import PropTypes from "prop-types";
import { Typography } from "@material-tailwind/react";

export function PageTitle({ heading }) {
  return (
    <div className="mx-auto w-full px-4 text-center lg:w-6/12">
      <Typography variant="h2" color="blue-gray" className="mb-3">
        {heading}
      </Typography>
    </div>
  );
}

PageTitle.propTypes = {
  heading: PropTypes.string.isRequired,
};

PageTitle.displayName = "/src/widgets/layout/page-title.jsx";

export default PageTitle;
