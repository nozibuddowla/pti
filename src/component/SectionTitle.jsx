import PropTypes from 'prop-types';

const SectionTitle = ({title}) => {
  return (
    <div className="md:pt-2 py-4">
        <h1 className="text-2xl xl:text-4xl font-semibold">{title}</h1>
    </div>
  )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
  };

export default SectionTitle;