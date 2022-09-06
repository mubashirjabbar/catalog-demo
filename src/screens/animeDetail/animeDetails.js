// Packages
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import React, {useEffect, useState} from 'react';
import {View, Text, Image} from 'react-native';

// Local
import appLoading from '../../components/appLoading/appLoading';
import * as actionTypes from '../../redux/action/actionTypes';
import {geDetailByIdFromServer} from './funtionalDetail';
import Header from '../../components/header/header';
import colors from '../../assets/colors';
import images from '../../assets/images';
import styles from './styles';
import { showAnimation } from '../../utils/common';

const AnimeDetails = props => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  let {favorite} = useSelector(state => {
    return state?.favoriteReducer;
  });

  const [loading, setLoading] = useState(false);
  const [id, setId] = useState(props?.route?.params?.id);

  const [animeDetail, setAnimeDetail] = useState();
  const [isFav, setIsFav] = useState(false);

  const favArray = favorite?.map(item => item.mal_id);
  const isFavorite = favArray?.includes(id);

  useEffect(() => {
    setLoading(true);
    getDetailById();
  }, []);

  const getDetailById = () => {
    geDetailByIdFromServer(id, response => {
      if (!response?.status === 200) {
        alert('something went wrong');
      } else {
        setAnimeDetail(response?.data?.data);
        setLoading(false);
      }
    });
  };

  const onPressRightFav = () => {

    dispatch({
      type: actionTypes?.SET_FAVORITE,
      payload: animeDetail,
    });
    setIsFav(!isFav);
  };

  return (
    <View style={styles.mainContainer}>
      {appLoading.renderLoading(loading)}
      <Header
        showLeftIcon
        leftIcon={images.leftArrow}
        onPressLeft={() => navigation.goBack()}
        titleHeader={animeDetail?.title}
        showRightIcon
        rightIcon={isFavorite ? images.fullFav : images.halfFav}
        showRedIcon={isFavorite ? true : false}
        onPressRight={() => onPressRightFav()}
      />
      {animeDetail && (
        <>
          <View style={styles.imageView}>
            <Image
              resizeMode="contain"
              style={styles.imageStyle}
              source={{
                uri: animeDetail?.images?.jpg?.large_image_url,
              }}
            />
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'No of episodes:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.episodes ? animeDetail?.episodes : 'N/a'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Duration:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.duration ? animeDetail?.duration : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Popularity:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.popularity ? animeDetail?.popularity : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Rank:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.rank ? animeDetail?.rank : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Season:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.season ? animeDetail?.season : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Members:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.members ? animeDetail?.members : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Broadcast day:'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.broadcast?.day
                ? animeDetail?.broadcast?.day
                : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Time/Timezone'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.broadcast?.time
                ? animeDetail?.broadcast?.time
                : 'N/A' + ' ' + animeDetail?.broadcast?.timezone
                ? animeDetail?.broadcast?.timezone
                : 'N/A'}
            </Text>
          </View>
          <View style={styles.commonView}>
            <Text style={[styles.commonText, {color: colors.primaryGreen}]}>
              {'Producers'}
            </Text>
            <Text style={styles.commonText}>
              {animeDetail?.producers[0]?.name
                ? animeDetail?.producers[0]?.name
                : 'N/A'}
            </Text>
          </View>
        </>
      )}
    </View>
  );
};

export default AnimeDetails;
