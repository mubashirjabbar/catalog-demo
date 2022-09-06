// Local
import {LayoutAnimation} from 'react-native';

export async function showAnimation() {
  LayoutAnimation.configureNext(
    LayoutAnimation.create(
      300,
      LayoutAnimation.Types.linear,
      LayoutAnimation.Properties.opacity,
    ),
  );
}
