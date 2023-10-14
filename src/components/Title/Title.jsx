import PropTypes from 'prop-types';

const Title = ({title}) => {
    const {miniTitle,mainTitle}=title
    return (
        <div className="text-center mt-20 mb-5 text-black">
            <h4 className="text-xs">{miniTitle}</h4>
            <h1 className="text-4xl font-rancho ">{mainTitle}</h1>
        </div>
    );
};

export default Title;
Title.propTypes={
    title:PropTypes.object.isRequired
}