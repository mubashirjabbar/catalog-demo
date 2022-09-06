// Packages
import {View, TextInput, FlatList, Text, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import React, {useState, useEffect} from 'react';

// Local
import AppLoading from '../../components/appLoading/appLoading';
import MainAnime from '../../components/mainAnime/mainAnime';
import {getListingFromServer} from './funtionalListing';
import Header from '../../components/header/header';
import {showAnimation} from '../../utils/common';
import images from '../../assets/images';
import colors from '../../assets/colors';
import styles from './styles';

const AnimeListing = props => {
  const drawerParams = props?.route?.params;
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);
  const [showlisting, setShowListing] = useState(true);

  const [refreshing, setRefreshing] = useState(false);
  const [pageNo, setPageNo] = useState(1);

  const [search, setSearch] = useState('');
  const [animeListing, setAnimeListing] = useState([]);
  const [masterData, setMasterData] = useState([]);

  const [airing, setAiring] = useState(false);
  const [complete, setComplete] = useState(false);
  const [upcoming, setUpcoming] = useState(false);

  const [status, setStatus] = useState('');
  const [isSearching, setIsSearching] = useState(true);

  useEffect(() => {
    resetToAllAnimeState();
  }, [drawerParams]);

  const resetToAllAnimeState = () => {

    setAnimeListing([]);
    setPageNo(1);
    setStatus('');
    setAiring(false);
    setComplete(false);
    setUpcoming(false);
    getListing(1, '', []);
  };

  const getListing = async (
    page = pageNo,
    newStatus = status,
    listing = animeListing,
  ) => {
    setLoading(true);
    const tempArray = [];
    getListingFromServer(page, newStatus, response => {
      if (!response?.status === 200) {
        setLoading(false);
        alert('something went wrong');
      }
      if (response?.data?.data?.length !== 0) {
        let responseArray = response?.data?.data;
        responseArray?.map(resp => {
          tempArray.push({
            id: resp?.mal_id,
            name: resp?.title ? resp?.title : 'N/A',
            score: resp?.score ? resp?.score : 'N/A',
            year: resp?.year ? resp?.year : 'N/A',
            image: resp?.images?.jpg?.large_image_url,
            rating: resp?.rating ? resp?.rating : 'N/A',
          });
        });

        const tempListing = [...listing, ...tempArray];
        setAnimeListing(tempListing);
        setMasterData(tempListing);
        setLoading(false);
        setRefreshing(false);
      } else {
        setLoading(false);
        setShowListing(true);
        alert('something went wrong');
      }
    });
  };

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

  const onPressAiring = () => {
    showAnimation();

    setAnimeListing([]);
    setStatus('airing');
    setPageNo(1);
    getListing(1, 'airing', []);

    setAiring(true);
    setComplete(false);
    setUpcoming(false);
  };
  const onPressComplete = () => {
    showAnimation();

    setAnimeListing([]);
    setStatus('complete');
    setPageNo(1);
    getListing(1, 'complete', []);
    setAiring(false);
    setComplete(true);
    setUpcoming(false);
  };
  const onPressUpcoming = () => {
    showAnimation();

    setAnimeListing([]);
    setStatus('upcoming');
    setPageNo(1);
    getListing(1, 'upcoming', []);
    setAiring(false);
    setComplete(false);
    setUpcoming(true);
  };

  const searchFilter = () => {
    setLoading(true);
    if (search) {
      setIsSearching(false);
      const newData = masterData.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = search.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });

      if (newData?.length === 0) {
        setShowListing(false);
        setLoading(false);
      } else {
        setShowListing(true);
        setAnimeListing(newData);
        setLoading(false);
        setSearch(search);
      }
    } else {
      setIsSearching(true);
      setShowListing(true);
      setAnimeListing(masterData);
      setLoading(false);
    }
  };
  return (
    <View style={styles.mainContainer}>
      {AppLoading.renderLoading(loading)}

      <Header
        leftIcon={images.sideMenu}
        showLeftIcon
        onPressLeft={() => navigation.openDrawer()}
        titleHeader={'Home'}
      />
      <View style={styles.searchView}>
        <TextInput
          style={styles.input}
          onChangeText={text => {
            setSearch(text);
          }}
          value={search}
          placeholder={'Search'}
          style={styles.textinputStyle}
          placeholderTextColor={colors.lightGray}
          onBlur={() => searchFilter()}
        />
      </View>

      <View style={styles.mainTitleStyle}>
        <Text style={styles.titleStyle}>{'Anime Listing'}</Text>
      </View>

      {showlisting ? (
        <View style={styles.flatlist}>
          <FlatList
            numColumns={2}
            showsVerticalScrollIndicator={false}
            data={animeListing}
            keyExtractor={item => item.id}
            renderItem={({item, index}) => renderAnimeListing(item, index)}
            refreshing={refreshing}
            onEndReachedThreshold={0.3}
            onEndReached={() => {
              if (isSearching) {
                setRefreshing(true);
                getListing(pageNo + 1);
                setPageNo(pageNo + 1);
              }
            }}
          />
        </View>
      ) : (
        <View style={styles.notDataFound}>
          <Text style={styles.titleStyle}>{'No anime found!'}</Text>
        </View>
      )}

      <View style={styles.bottomTabs}>
        <Pressable
          onPress={onPressAiring}
          style={[
            styles.commonViewStyle,
            {
              borderRightWidth: 0.5,
              backgroundColor: airing ? colors.white : colors.primaryGreen,
            },
          ]}>
          <Text
            style={[
              styles.bottomTextStyle,
              {color: airing ? colors.primaryGreen : colors.white},
            ]}>
            {'Airing'}
          </Text>
        </Pressable>
        <Pressable
          onPress={onPressComplete}
          style={[
            styles.commonViewStyle,
            {
              borderRightWidth: 0.5,
              backgroundColor: complete ? colors.white : colors.primaryGreen,
            },
          ]}>
          <Text
            style={[
              styles.bottomTextStyle,
              {color: complete ? colors.primaryGreen : colors.white},
            ]}>
            {'Complete'}
          </Text>
        </Pressable>
        <Pressable
          onPress={onPressUpcoming}
          style={[
            styles.commonViewStyle,
            {
              width: '34%',
              backgroundColor: upcoming ? colors.white : colors.primaryGreen,
            },
          ]}>
          <Text
            style={[
              styles.bottomTextStyle,
              {
                color: upcoming ? colors.primaryGreen : colors.white,
              },
            ]}>
            {'Upcoming'}
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default AnimeListing;
