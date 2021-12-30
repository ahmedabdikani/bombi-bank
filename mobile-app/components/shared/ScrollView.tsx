import styled from '@emotion/native';
import withBg from '../../hoc/withBg';

import withFlex from '../../hoc/withFlex';
import withSpacing from '../../hoc/withSpacing';

const ScrollView = withSpacing(withFlex(withBg(styled.ScrollView({}))));

export default ScrollView;
