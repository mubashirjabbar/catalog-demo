// Packages
import {useNavigation} from '@react-navigation/native';
import {View, Text, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import React, {useState} from 'react';

// Local
import appLoading from '../../components/appLoading/appLoading';
import MainAnime from '../../components/mainAnime/mainAnime';
import Header from '../../components/header/header';
import images from '../../assets/images';
import styles from './styles';

const Favorites = () => {
  const navigation = useNavigation();
  let {favorite} = useSelector(state => {
    return state?.favoriteReducer;
  });

  const [loading, setLoading] = useState(false);

  const listing = favorite?.map(resp => {
    return {
      favorite: true,
      id: resp?.mal_id,
      name: resp?.title ? resp?.title : 'N/A',
      score: resp?.score ? resp?.score : 'N/A',
      year: resp?.year ? resp?.year : 'N/A',
      image: resp?.images?.jpg?.large_image_url,
      rating: resp?.rating ? resp?.rating : 'N/A',
    };
  });

  const renderAnimeListing = item => {
    return (
      <MainAnime
        name={item?.name}
        score={item?.score}
        year={item?.year}
        image={item?.image}
        rating={item?.rating}
        onPressItem={() =>
          navigation.navigate('AnimeDetails', {
            id: item?.id,
          })
        }
      />
    );
  };
  return (
    <View style={styles.mainContainer}>
      {appLoading.renderLoading(loading)}

      <Header
        leftIcon={images.sideMenu}
        showLeftIcon
        onPressLeft={() => navigation.openDrawer()}
        titleHeader={'Favories'}
      />
      {listing.length !== 0 ? (
        <View style={styles.flatlist}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={listing}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => renderAnimeListing(item, index)}
          />
        </View>
      ) : (
        <View style={styles.notDataFound}>
          <Text style={styles.titleStyle}>{'No anime found!'}</Text>
        </View>
      )}
    </View>
  );
};

export default Favorites;
