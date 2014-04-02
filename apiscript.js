var service, infowindow, map;
var request = {
reference: 'CnRpAAAArVkn0zrA4SxBlOfCOAAHG0ZvwW64Pj100A-sMni1sqZWvRFJi8JXfO_DngqsWkq38rZzzVF9HRig7eY-w6wPsB8uwg5hfoVF3Qjyp4j3dgCFDwdjtdiXHS_2MiWHpZX_rKqbP03j3X07MGbyhikKZBIQ0uRc4nAWWg9KCC70jgGeDhoUI44v-m77XhdDgjiOzRBKyqEbn10'
};
var lat = 38.914931,
    lng = -77.031964;

function initialize() {
  map = new google.maps.Map(document.getElementById('mapCanvas'), {
    center: new google.maps.LatLng(lat, lng),
    zoom: 19
  });

  infowindow = new google.maps.InfoWindow();
  service = new google.maps.places.PlacesService(map);

  fetchRef();
}

google.maps.event.addDomListener(window, 'load', initialize);

$('.restName').on('click', fetchRef);

function fetchRef(e) {
    e && e.preventDefault();
    if($(this).text() == 'Matchbox') {
        request = { reference: 'CoQBcQAAALThnySABaySTle6c0fOhQzZkFQrb6BiEU2mWQ3JxrS2sMxo7dpPI8-It0cqM5ijHp-axLh1tHV4OpQTB7m4Wy3-mFPgTuLasBgEvdtAaUpDleiw_GL9S5EipdKET6aOQGJjXUjyta7SdpyX_7bWSd6_RL4rwvbr6_f9BannJJvvEhDcJExazWr13bUqQaI_j4tbGhSXm5HfL1soxft13-xQXiAhhdyGVw'};
        lat = 38.915733;
        lng = -77.031541;
    } else if($(this).text() == 'Masa14') {
        request = { reference: 'CnRpAAAArVkn0zrA4SxBlOfCOAAHG0ZvwW64Pj100A-sMni1sqZWvRFJi8JXfO_DngqsWkq38rZzzVF9HRig7eY-w6wPsB8uwg5hfoVF3Qjyp4j3dgCFDwdjtdiXHS_2MiWHpZX_rKqbP03j3X07MGbyhikKZBIQ0uRc4nAWWg9KCC70jgGeDhoUI44v-m77XhdDgjiOzRBKyqEbn10'};
        lat = 38.908405;
        lng = -77.03214;
    }   else if($(this).text() == 'Churchkey') {
        request = { reference: 'CnRrAAAAroONlQnqoI3PRJkewmlO-Ie4cnW85iB19nFxB28SkgIRLwVqUUCRO2wVunehik5wjG8cUPyAxMtkKytg_FqI95BoEDy55yUN_5Ybk7zeeXJyINdg4OOO40toHJRdhdGRrxHAZMVA5UE_y5yCqd14yBIQE1RMGY4MxYemNpsi7fuyGhoU37QUdUCfkDiwBuqnDiNV5s0OIpE'};
        lat = 38.908487;
        lng = -77.031481;
    }   else if($(this).text() == 'Ghana Cafe') {
        request = { reference: 'CnRtAAAAlSbs1TV-KnCEPqvdKwJFcqjor8jIEKXygmhJMYd0vCxT2s4HT-iEjh7hOtTsYZVRUaQbcPdfC6gr0lXeUrgsgCjy8myBGxvV4QsNAt88hrJP1np0L5nnHCrTe1m2N0qg9LcS0gY6uFnt9wCWcDUOJRIQJDCxBHDCalDbY_ixyeAGrhoUIijLzCfuZJcbbQaai9i5_WyLTEo'};
        lat = 38.908405;
        lng = -77.03215;
    }   else if($(this).text() == 'B Too') {
        request = { reference: 'CnRnAAAAWXQdxhkiT7h4L_Fkp97-9PilFJO4L-_fVp_rmwayX2_D3oHusUAogK0L2Qhe_B-g-O6YHcbLuWzq-DBJQ6t5iPWHFLv_gqHrWRGgrkFfTfd63TeEKAdQYtCNVfTxPujNBZbQoNSLDLwIU3qysVg5vBIQLfVbeafEZvMteRxHDj0x7hoUEGYPJYloogU_Zka9zPTiSFOgXqI'};
        lat = 38.90811;
        lng = -77.032151;
    }   else if($(this).text() == 'El Centro') {
        request = { reference: 'CnRwAAAATVDdJOlcwLA4N2jo-IQAtcVXVTtSmyrHsLtDeLhMXzLsOOvNcQ0dzPlmTyznq-Folpn36kS2JcW9ibknh04WGtFC_4DazfkHOF1GGzUVSDAcLEVbC-E8BJCI34Zti88i730d3bUhp4iZRsfz_KG6IRIQqSlCDBNfGjfVT7CHUvSw1hoUu4899fngIsLLoKaCv3e4YU9GNIc'};
        lat = 38.914667;
        lng = -77.031663;
    }   else if($(this).text() == 'Drafting Table') {
        request = { reference: 'CnRvAAAAqIJe2e_TC8QS4zhun0IexQq0Ds5XO5x6559xEinGFVYM2SOWXTD-VWqgzm_YhyB75k7YzJxZkajGnWBN2Ua7OJwjGWmmeFYPNNON40ljzO3CF_0y2NfMAOy48ATJTJSXoOjVmVVoV5zzAc0JjNLxfRIQI_Sz6u5VL7pUa1t-QMjaUhoUJT6UGWWZr-Cc1bz1JthsdZVucrQ'};
        lat = 38.910817;
        lng = -77.031764;
    }   else if($(this).text() == 'Ghibellina') {
        request = { reference: 'CnRrAAAA2szpVYR4eeASx0ayckk1F3B6nyHKS_eQ-naQcbdI3sOLjS7NEgkWlSrsDNZ9syVBfJGefTjFVc76Vby7oxCiO53OypQ1x7htxdPtnQcVO8NguIRoYMI4CfC5p62E_sO82j6UaEkU1I5ab_NjilTy9xIQX25H1VQyta3WfrWdUdhOiBoUfYxUx_KDqjHOvB92DLAQLX9SmkU'};
        lat = 38.911567;
        lng = -77.032156;
    }   else if($(this).text() == 'Diego') {
        request = { reference: 'CnRnAAAAk7oVNKqkRNCE5K_BpkrRhIa-SBmWUl55YCX3TDsl7IZrKrawrV2crs2WdclSskN8eU86n7s1OUp087FDyZiFB5nq14nFcm2W-2XzeVWLHHSo6BAmldZEzic-_cd4iOs7stpmDjZhZUkMFP4im8ohlxIQwxggMELvQ3PpDggYB_0h2xoUSpQhMQbp9sSB8AJBuizpPTNn_vc'};
        lat = 38.918257;
        lng = -77.032138;
    }   else if($(this).text() == 'Rice') {
        request = { reference: 'CnRlAAAAb0GunNgHElh2j5F3Fj-odeQDxqAEmaStpTH0Ew7vmv9VZVmo5osb2xImegKsXSEjcpZ44lDtmAz7nmMU85BoWmPOr2uAtRcoq-phpAs1VxmJUavZyWLKV3Jb6P02i7kl3p15XK1o07fc3EB3q0X9BhIQqbi6g9GoUJyATpn97PeCDxoUs2pF3RC5aIFW-JwAviLvZgnOX5Q'};
        lat = 38.911535;
        lng = -77.032251;
    }

    service.getDetails(request, function(place, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        var marker = new google.maps.Marker({
          map: map,
          position: place.geometry.location
        });
        map.setCenter(new google.maps.LatLng(lat, lng));
        google.maps.event.addListener(marker, 'click', function() {
          infowindow.setContent(place.name + "<br />" + place.formatted_address +"<br />" + "<a>" + place.website + "</a>" + "<br />" + "rating: " + place.rating + "<br />" + place.formatted_phone_number);
          // infowindow.setContent(place.name + "<br />" + place.formatted_address +"<br><a target="_blank" href="+place.website+">+place.website+</a>" + "<br />" + "rating: " + place.rating + "<br />" + place.formatted_phone_number);
          infowindow.open(map, this);
        });
      }
    });
}

/*  list of references plus lat,lng

Churchkey
'CnRrAAAAroONlQnqoI3PRJkewmlO-Ie4cnW85iB19nFxB28SkgIRLwVqUUCRO2wVunehik5wjG8cUPyAxMtkKytg_FqI95BoEDy55yUN_5Ybk7zeeXJyINdg4OOO40toHJRdhdGRrxHAZMVA5UE_y5yCqd14yBIQE1RMGY4MxYemNpsi7fuyGhoU37QUdUCfkDiwBuqnDiNV5s0OIpE'
lat: 38.908487,
lng: -77.031481

Ghana Cafe
'CnRtAAAAlSbs1TV-KnCEPqvdKwJFcqjor8jIEKXygmhJMYd0vCxT2s4HT-iEjh7hOtTsYZVRUaQbcPdfC6gr0lXeUrgsgCjy8myBGxvV4QsNAt88hrJP1np0L5nnHCrTe1m2N0qg9LcS0gY6uFnt9wCWcDUOJRIQJDCxBHDCalDbY_ixyeAGrhoUIijLzCfuZJcbbQaai9i5_WyLTEo'
lat: 38.908405,
lng: -77.03214

B Too
'CnRnAAAAWXQdxhkiT7h4L_Fkp97-9PilFJO4L-_fVp_rmwayX2_D3oHusUAogK0L2Qhe_B-g-O6YHcbLuWzq-DBJQ6t5iPWHFLv_gqHrWRGgrkFfTfd63TeEKAdQYtCNVfTxPujNBZbQoNSLDLwIU3qysVg5vBIQLfVbeafEZvMteRxHDj0x7hoUEGYPJYloogU_Zka9zPTiSFOgXqI'
lat: 38.90811,
lng: -77.032151

Masa14
'CnRpAAAArVkn0zrA4SxBlOfCOAAHG0ZvwW64Pj100A-sMni1sqZWvRFJi8JXfO_DngqsWkq38rZzzVF9HRig7eY-w6wPsB8uwg5hfoVF3Qjyp4j3dgCFDwdjtdiXHS_2MiWHpZX_rKqbP03j3X07MGbyhikKZBIQ0uRc4nAWWg9KCC70jgGeDhoUI44v-m77XhdDgjiOzRBKyqEbn10'

El Centro
'CnRwAAAATVDdJOlcwLA4N2jo-IQAtcVXVTtSmyrHsLtDeLhMXzLsOOvNcQ0dzPlmTyznq-Folpn36kS2JcW9ibknh04WGtFC_4DazfkHOF1GGzUVSDAcLEVbC-E8BJCI34Zti88i730d3bUhp4iZRsfz_KG6IRIQqSlCDBNfGjfVT7CHUvSw1hoUu4899fngIsLLoKaCv3e4YU9GNIc'
lat: 38.914667,
lng: -77.031663

Drafting Table
'CnRvAAAAqIJe2e_TC8QS4zhun0IexQq0Ds5XO5x6559xEinGFVYM2SOWXTD-VWqgzm_YhyB75k7YzJxZkajGnWBN2Ua7OJwjGWmmeFYPNNON40ljzO3CF_0y2NfMAOy48ATJTJSXoOjVmVVoV5zzAc0JjNLxfRIQI_Sz6u5VL7pUa1t-QMjaUhoUJT6UGWWZr-Cc1bz1JthsdZVucrQ'
lat: 38.910817,
lng: -77.031764

Ghibellina
'CnRrAAAA2szpVYR4eeASx0ayckk1F3B6nyHKS_eQ-naQcbdI3sOLjS7NEgkWlSrsDNZ9syVBfJGefTjFVc76Vby7oxCiO53OypQ1x7htxdPtnQcVO8NguIRoYMI4CfC5p62E_sO82j6UaEkU1I5ab_NjilTy9xIQX25H1VQyta3WfrWdUdhOiBoUfYxUx_KDqjHOvB92DLAQLX9SmkU'
lat: 38.911567,
lng: -77.032156

Diego
'CnRnAAAAk7oVNKqkRNCE5K_BpkrRhIa-SBmWUl55YCX3TDsl7IZrKrawrV2crs2WdclSskN8eU86n7s1OUp087FDyZiFB5nq14nFcm2W-2XzeVWLHHSo6BAmldZEzic-_cd4iOs7stpmDjZhZUkMFP4im8ohlxIQwxggMELvQ3PpDggYB_0h2xoUSpQhMQbp9sSB8AJBuizpPTNn_vc'
lat: 38.918257,
lng: -77.032138

Rice
'CnRlAAAAb0GunNgHElh2j5F3Fj-odeQDxqAEmaStpTH0Ew7vmv9VZVmo5osb2xImegKsXSEjcpZ44lDtmAz7nmMU85BoWmPOr2uAtRcoq-phpAs1VxmJUavZyWLKV3Jb6P02i7kl3p15XK1o07fc3EB3q0X9BhIQqbi6g9GoUJyATpn97PeCDxoUs2pF3RC5aIFW-JwAviLvZgnOX5Q'
lat: 38.911535,
lng: -77.032251

Matchbox
'CoQBdAAAAFpyrfh5G0avCLczDVrJQoDyNhtmZAZPunUe6UKR9b9spL_YJsLSZ6i627FhBZc2CJVrjcCx7oTUrGiQYI6HdA4bTEm80kHStCFuuGBnStfehn9m-TpKuxa85uGO1Xt7BEKwROzP2kZZztM-Zx3cXVRZq-UJWEJTZCu11Yv-ciWBEhAd8IFxwo5FxnSDBhCI8zSDGhT8CRrOXKBQNoGNw8ZN-DpscsTj4w'
lat: 38.915733,
lng: -77.031541
*/