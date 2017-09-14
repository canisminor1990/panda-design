import PropTypes from 'prop-types';
import styled from 'styled-components';
import { style } from '../';

const props      = {
	transparent: PropTypes.bool
};
const WhiteSpack = ({
	                    height = 10,
	                    transparent = false,
	                    children,
	                    ...other
                    }) => {
	let WhiteSpace = styled.div`
		color: ${style.color.textLight};
		width: 100%;
		background: ${transparent ? `transparent` : style.color.bgPage};
	`;

	if (children) {
		WhiteSpace = WhiteSpace.extend`
		padding: ${children ? `10px 16px` : 0};
		`
	}else {
		WhiteSpace = WhiteSpace.extend`
		height: ${height}px;
		`
	}

	return (
		<WhiteSpace {...other}>
			{children}
		</WhiteSpace>
	);
};

WhiteSpack.propTypes = props;

export default WhiteSpack;