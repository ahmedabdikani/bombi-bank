import styled from '@emotion/native';

import withBorder from '../../../hoc/withBorder';
import withPosition from '../../../hoc/withPosition';
import withSize from '../../../hoc/withSize';
import withSpacing from '../../../hoc/withSpacing';

const Image = withSize(withSpacing(withBorder(withPosition(styled.Image({})))));

export default Image;
