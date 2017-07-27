import { Component } from '@angular/core';
import { NgaThemeService } from '@akveo/nga-theme';

@Component({
  selector: 'ngx-bubble-map',
  styleUrls: ['./bubble-map.component.scss'],
  template: `
    <nga-card size="xlarge">
    <nga-card-header>Bubble Maps</nga-card-header>
      <nga-card-body>
        <div echarts [options]="options" class="echarts"></div>
      </nga-card-body>
    </nga-card>
  `,
})
export class BubbleMapComponent {

  latlong: any = {};
  mapData: any[];
  max = -Infinity;
  min = Infinity;
  options: any;

  constructor(private theme: NgaThemeService) {

    this.theme.getJsTheme()
      .subscribe(config => {

        this.latlong['AD'] = { 'latitude': 42.5, 'longitude': 1.5 };
        this.latlong['AE'] = { 'latitude': 24, 'longitude': 54 };
        this.latlong['AF'] = { 'latitude': 33, 'longitude': 65 };
        this.latlong['AG'] = { 'latitude': 17.05, 'longitude': -61.8 };
        this.latlong['AI'] = { 'latitude': 18.25, 'longitude': -63.1667 };
        this.latlong['AL'] = { 'latitude': 41, 'longitude': 20 };
        this.latlong['AM'] = { 'latitude': 40, 'longitude': 45 };
        this.latlong['AN'] = { 'latitude': 12.25, 'longitude': -68.75 };
        this.latlong['AO'] = { 'latitude': -12.5, 'longitude': 18.5 };
        this.latlong['AP'] = { 'latitude': 35, 'longitude': 105 };
        this.latlong['AQ'] = { 'latitude': -90, 'longitude': 0 };
        this.latlong['AR'] = { 'latitude': -34, 'longitude': -64 };
        this.latlong['AS'] = { 'latitude': -14.3333, 'longitude': -170 };
        this.latlong['AT'] = { 'latitude': 47.3333, 'longitude': 13.3333 };
        this.latlong['AU'] = { 'latitude': -27, 'longitude': 133 };
        this.latlong['AW'] = { 'latitude': 12.5, 'longitude': -69.9667 };
        this.latlong['AZ'] = { 'latitude': 40.5, 'longitude': 47.5 };
        this.latlong['BA'] = { 'latitude': 44, 'longitude': 18 };
        this.latlong['BB'] = { 'latitude': 13.1667, 'longitude': -59.5333 };
        this.latlong['BD'] = { 'latitude': 24, 'longitude': 90 };
        this.latlong['BE'] = { 'latitude': 50.8333, 'longitude': 4 };
        this.latlong['BF'] = { 'latitude': 13, 'longitude': -2 };
        this.latlong['BG'] = { 'latitude': 43, 'longitude': 25 };
        this.latlong['BH'] = { 'latitude': 26, 'longitude': 50.55 };
        this.latlong['BI'] = { 'latitude': -3.5, 'longitude': 30 };
        this.latlong['BJ'] = { 'latitude': 9.5, 'longitude': 2.25 };
        this.latlong['BM'] = { 'latitude': 32.3333, 'longitude': -64.75 };
        this.latlong['BN'] = { 'latitude': 4.5, 'longitude': 114.6667 };
        this.latlong['BO'] = { 'latitude': -17, 'longitude': -65 };
        this.latlong['BR'] = { 'latitude': -10, 'longitude': -55 };
        this.latlong['BS'] = { 'latitude': 24.25, 'longitude': -76 };
        this.latlong['BT'] = { 'latitude': 27.5, 'longitude': 90.5 };
        this.latlong['BV'] = { 'latitude': -54.4333, 'longitude': 3.4 };
        this.latlong['BW'] = { 'latitude': -22, 'longitude': 24 };
        this.latlong['BY'] = { 'latitude': 53, 'longitude': 28 };
        this.latlong['BZ'] = { 'latitude': 17.25, 'longitude': -88.75 };
        this.latlong['CA'] = { 'latitude': 54, 'longitude': -100 };
        this.latlong['CC'] = { 'latitude': -12.5, 'longitude': 96.8333 };
        this.latlong['CD'] = { 'latitude': 0, 'longitude': 25 };
        this.latlong['CF'] = { 'latitude': 7, 'longitude': 21 };
        this.latlong['CG'] = { 'latitude': -1, 'longitude': 15 };
        this.latlong['CH'] = { 'latitude': 47, 'longitude': 8 };
        this.latlong['CI'] = { 'latitude': 8, 'longitude': -5 };
        this.latlong['CK'] = { 'latitude': -21.2333, 'longitude': -159.7667 };
        this.latlong['CL'] = { 'latitude': -30, 'longitude': -71 };
        this.latlong['CM'] = { 'latitude': 6, 'longitude': 12 };
        this.latlong['CN'] = { 'latitude': 35, 'longitude': 105 };
        this.latlong['CO'] = { 'latitude': 4, 'longitude': -72 };
        this.latlong['CR'] = { 'latitude': 10, 'longitude': -84 };
        this.latlong['CU'] = { 'latitude': 21.5, 'longitude': -80 };
        this.latlong['CV'] = { 'latitude': 16, 'longitude': -24 };
        this.latlong['CX'] = { 'latitude': -10.5, 'longitude': 105.6667 };
        this.latlong['CY'] = { 'latitude': 35, 'longitude': 33 };
        this.latlong['CZ'] = { 'latitude': 49.75, 'longitude': 15.5 };
        this.latlong['DE'] = { 'latitude': 51, 'longitude': 9 };
        this.latlong['DJ'] = { 'latitude': 11.5, 'longitude': 43 };
        this.latlong['DK'] = { 'latitude': 56, 'longitude': 10 };
        this.latlong['DM'] = { 'latitude': 15.4167, 'longitude': -61.3333 };
        this.latlong['DO'] = { 'latitude': 19, 'longitude': -70.6667 };
        this.latlong['DZ'] = { 'latitude': 28, 'longitude': 3 };
        this.latlong['EC'] = { 'latitude': -2, 'longitude': -77.5 };
        this.latlong['EE'] = { 'latitude': 59, 'longitude': 26 };
        this.latlong['EG'] = { 'latitude': 27, 'longitude': 30 };
        this.latlong['EH'] = { 'latitude': 24.5, 'longitude': -13 };
        this.latlong['ER'] = { 'latitude': 15, 'longitude': 39 };
        this.latlong['ES'] = { 'latitude': 40, 'longitude': -4 };
        this.latlong['ET'] = { 'latitude': 8, 'longitude': 38 };
        this.latlong['EU'] = { 'latitude': 47, 'longitude': 8 };
        this.latlong['FI'] = { 'latitude': 62, 'longitude': 26 };
        this.latlong['FJ'] = { 'latitude': -18, 'longitude': 175 };
        this.latlong['FK'] = { 'latitude': -51.75, 'longitude': -59 };
        this.latlong['FM'] = { 'latitude': 6.9167, 'longitude': 158.25 };
        this.latlong['FO'] = { 'latitude': 62, 'longitude': -7 };
        this.latlong['FR'] = { 'latitude': 46, 'longitude': 2 };
        this.latlong['GA'] = { 'latitude': -1, 'longitude': 11.75 };
        this.latlong['GB'] = { 'latitude': 54, 'longitude': -2 };
        this.latlong['GD'] = { 'latitude': 12.1167, 'longitude': -61.6667 };
        this.latlong['GE'] = { 'latitude': 42, 'longitude': 43.5 };
        this.latlong['GF'] = { 'latitude': 4, 'longitude': -53 };
        this.latlong['GH'] = { 'latitude': 8, 'longitude': -2 };
        this.latlong['GI'] = { 'latitude': 36.1833, 'longitude': -5.3667 };
        this.latlong['GL'] = { 'latitude': 72, 'longitude': -40 };
        this.latlong['GM'] = { 'latitude': 13.4667, 'longitude': -16.5667 };
        this.latlong['GN'] = { 'latitude': 11, 'longitude': -10 };
        this.latlong['GP'] = { 'latitude': 16.25, 'longitude': -61.5833 };
        this.latlong['GQ'] = { 'latitude': 2, 'longitude': 10 };
        this.latlong['GR'] = { 'latitude': 39, 'longitude': 22 };
        this.latlong['GS'] = { 'latitude': -54.5, 'longitude': -37 };
        this.latlong['GT'] = { 'latitude': 15.5, 'longitude': -90.25 };
        this.latlong['GU'] = { 'latitude': 13.4667, 'longitude': 144.7833 };
        this.latlong['GW'] = { 'latitude': 12, 'longitude': -15 };
        this.latlong['GY'] = { 'latitude': 5, 'longitude': -59 };
        this.latlong['HK'] = { 'latitude': 22.25, 'longitude': 114.1667 };
        this.latlong['HM'] = { 'latitude': -53.1, 'longitude': 72.5167 };
        this.latlong['HN'] = { 'latitude': 15, 'longitude': -86.5 };
        this.latlong['HR'] = { 'latitude': 45.1667, 'longitude': 15.5 };
        this.latlong['HT'] = { 'latitude': 19, 'longitude': -72.4167 };
        this.latlong['HU'] = { 'latitude': 47, 'longitude': 20 };
        this.latlong['ID'] = { 'latitude': -5, 'longitude': 120 };
        this.latlong['IE'] = { 'latitude': 53, 'longitude': -8 };
        this.latlong['IL'] = { 'latitude': 31.5, 'longitude': 34.75 };
        this.latlong['IN'] = { 'latitude': 20, 'longitude': 77 };
        this.latlong['IO'] = { 'latitude': -6, 'longitude': 71.5 };
        this.latlong['IQ'] = { 'latitude': 33, 'longitude': 44 };
        this.latlong['IR'] = { 'latitude': 32, 'longitude': 53 };
        this.latlong['IS'] = { 'latitude': 65, 'longitude': -18 };
        this.latlong['IT'] = { 'latitude': 42.8333, 'longitude': 12.8333 };
        this.latlong['JM'] = { 'latitude': 18.25, 'longitude': -77.5 };
        this.latlong['JO'] = { 'latitude': 31, 'longitude': 36 };
        this.latlong['JP'] = { 'latitude': 36, 'longitude': 138 };
        this.latlong['KE'] = { 'latitude': 1, 'longitude': 38 };
        this.latlong['KG'] = { 'latitude': 41, 'longitude': 75 };
        this.latlong['KH'] = { 'latitude': 13, 'longitude': 105 };
        this.latlong['KI'] = { 'latitude': 1.4167, 'longitude': 173 };
        this.latlong['KM'] = { 'latitude': -12.1667, 'longitude': 44.25 };
        this.latlong['KN'] = { 'latitude': 17.3333, 'longitude': -62.75 };
        this.latlong['KP'] = { 'latitude': 40, 'longitude': 127 };
        this.latlong['KR'] = { 'latitude': 37, 'longitude': 127.5 };
        this.latlong['KW'] = { 'latitude': 29.3375, 'longitude': 47.6581 };
        this.latlong['KY'] = { 'latitude': 19.5, 'longitude': -80.5 };
        this.latlong['KZ'] = { 'latitude': 48, 'longitude': 68 };
        this.latlong['LA'] = { 'latitude': 18, 'longitude': 105 };
        this.latlong['LB'] = { 'latitude': 33.8333, 'longitude': 35.8333 };
        this.latlong['LC'] = { 'latitude': 13.8833, 'longitude': -61.1333 };
        this.latlong['LI'] = { 'latitude': 47.1667, 'longitude': 9.5333 };
        this.latlong['LK'] = { 'latitude': 7, 'longitude': 81 };
        this.latlong['LR'] = { 'latitude': 6.5, 'longitude': -9.5 };
        this.latlong['LS'] = { 'latitude': -29.5, 'longitude': 28.5 };
        this.latlong['LT'] = { 'latitude': 55, 'longitude': 24 };
        this.latlong['LU'] = { 'latitude': 49.75, 'longitude': 6 };
        this.latlong['LV'] = { 'latitude': 57, 'longitude': 25 };
        this.latlong['LY'] = { 'latitude': 25, 'longitude': 17 };
        this.latlong['MA'] = { 'latitude': 32, 'longitude': -5 };
        this.latlong['MC'] = { 'latitude': 43.7333, 'longitude': 7.4 };
        this.latlong['MD'] = { 'latitude': 47, 'longitude': 29 };
        this.latlong['ME'] = { 'latitude': 42.5, 'longitude': 19.4 };
        this.latlong['MG'] = { 'latitude': -20, 'longitude': 47 };
        this.latlong['MH'] = { 'latitude': 9, 'longitude': 168 };
        this.latlong['MK'] = { 'latitude': 41.8333, 'longitude': 22 };
        this.latlong['ML'] = { 'latitude': 17, 'longitude': -4 };
        this.latlong['MM'] = { 'latitude': 22, 'longitude': 98 };
        this.latlong['MN'] = { 'latitude': 46, 'longitude': 105 };
        this.latlong['MO'] = { 'latitude': 22.1667, 'longitude': 113.55 };
        this.latlong['MP'] = { 'latitude': 15.2, 'longitude': 145.75 };
        this.latlong['MQ'] = { 'latitude': 14.6667, 'longitude': -61 };
        this.latlong['MR'] = { 'latitude': 20, 'longitude': -12 };
        this.latlong['MS'] = { 'latitude': 16.75, 'longitude': -62.2 };
        this.latlong['MT'] = { 'latitude': 35.8333, 'longitude': 14.5833 };
        this.latlong['MU'] = { 'latitude': -20.2833, 'longitude': 57.55 };
        this.latlong['MV'] = { 'latitude': 3.25, 'longitude': 73 };
        this.latlong['MW'] = { 'latitude': -13.5, 'longitude': 34 };
        this.latlong['MX'] = { 'latitude': 23, 'longitude': -102 };
        this.latlong['MY'] = { 'latitude': 2.5, 'longitude': 112.5 };
        this.latlong['MZ'] = { 'latitude': -18.25, 'longitude': 35 };
        this.latlong['NA'] = { 'latitude': -22, 'longitude': 17 };
        this.latlong['NC'] = { 'latitude': -21.5, 'longitude': 165.5 };
        this.latlong['NE'] = { 'latitude': 16, 'longitude': 8 };
        this.latlong['NF'] = { 'latitude': -29.0333, 'longitude': 167.95 };
        this.latlong['NG'] = { 'latitude': 10, 'longitude': 8 };
        this.latlong['NI'] = { 'latitude': 13, 'longitude': -85 };
        this.latlong['NL'] = { 'latitude': 52.5, 'longitude': 5.75 };
        this.latlong['NO'] = { 'latitude': 62, 'longitude': 10 };
        this.latlong['NP'] = { 'latitude': 28, 'longitude': 84 };
        this.latlong['NR'] = { 'latitude': -0.5333, 'longitude': 166.9167 };
        this.latlong['NU'] = { 'latitude': -19.0333, 'longitude': -169.8667 };
        this.latlong['NZ'] = { 'latitude': -41, 'longitude': 174 };
        this.latlong['OM'] = { 'latitude': 21, 'longitude': 57 };
        this.latlong['PA'] = { 'latitude': 9, 'longitude': -80 };
        this.latlong['PE'] = { 'latitude': -10, 'longitude': -76 };
        this.latlong['PF'] = { 'latitude': -15, 'longitude': -140 };
        this.latlong['PG'] = { 'latitude': -6, 'longitude': 147 };
        this.latlong['PH'] = { 'latitude': 13, 'longitude': 122 };
        this.latlong['PK'] = { 'latitude': 30, 'longitude': 70 };
        this.latlong['PL'] = { 'latitude': 52, 'longitude': 20 };
        this.latlong['PM'] = { 'latitude': 46.8333, 'longitude': -56.3333 };
        this.latlong['PR'] = { 'latitude': 18.25, 'longitude': -66.5 };
        this.latlong['PS'] = { 'latitude': 32, 'longitude': 35.25 };
        this.latlong['PT'] = { 'latitude': 39.5, 'longitude': -8 };
        this.latlong['PW'] = { 'latitude': 7.5, 'longitude': 134.5 };
        this.latlong['PY'] = { 'latitude': -23, 'longitude': -58 };
        this.latlong['QA'] = { 'latitude': 25.5, 'longitude': 51.25 };
        this.latlong['RE'] = { 'latitude': -21.1, 'longitude': 55.6 };
        this.latlong['RO'] = { 'latitude': 46, 'longitude': 25 };
        this.latlong['RS'] = { 'latitude': 44, 'longitude': 21 };
        this.latlong['RU'] = { 'latitude': 60, 'longitude': 100 };
        this.latlong['RW'] = { 'latitude': -2, 'longitude': 30 };
        this.latlong['SA'] = { 'latitude': 25, 'longitude': 45 };
        this.latlong['SB'] = { 'latitude': -8, 'longitude': 159 };
        this.latlong['SC'] = { 'latitude': -4.5833, 'longitude': 55.6667 };
        this.latlong['SD'] = { 'latitude': 15, 'longitude': 30 };
        this.latlong['SE'] = { 'latitude': 62, 'longitude': 15 };
        this.latlong['SG'] = { 'latitude': 1.3667, 'longitude': 103.8 };
        this.latlong['SH'] = { 'latitude': -15.9333, 'longitude': -5.7 };
        this.latlong['SI'] = { 'latitude': 46, 'longitude': 15 };
        this.latlong['SJ'] = { 'latitude': 78, 'longitude': 20 };
        this.latlong['SK'] = { 'latitude': 48.6667, 'longitude': 19.5 };
        this.latlong['SL'] = { 'latitude': 8.5, 'longitude': -11.5 };
        this.latlong['SM'] = { 'latitude': 43.7667, 'longitude': 12.4167 };
        this.latlong['SN'] = { 'latitude': 14, 'longitude': -14 };
        this.latlong['SO'] = { 'latitude': 10, 'longitude': 49 };
        this.latlong['SR'] = { 'latitude': 4, 'longitude': -56 };
        this.latlong['ST'] = { 'latitude': 1, 'longitude': 7 };
        this.latlong['SV'] = { 'latitude': 13.8333, 'longitude': -88.9167 };
        this.latlong['SY'] = { 'latitude': 35, 'longitude': 38 };
        this.latlong['SZ'] = { 'latitude': -26.5, 'longitude': 31.5 };
        this.latlong['TC'] = { 'latitude': 21.75, 'longitude': -71.5833 };
        this.latlong['TD'] = { 'latitude': 15, 'longitude': 19 };
        this.latlong['TF'] = { 'latitude': -43, 'longitude': 67 };
        this.latlong['TG'] = { 'latitude': 8, 'longitude': 1.1667 };
        this.latlong['TH'] = { 'latitude': 15, 'longitude': 100 };
        this.latlong['TJ'] = { 'latitude': 39, 'longitude': 71 };
        this.latlong['TK'] = { 'latitude': -9, 'longitude': -172 };
        this.latlong['TM'] = { 'latitude': 40, 'longitude': 60 };
        this.latlong['TN'] = { 'latitude': 34, 'longitude': 9 };
        this.latlong['TO'] = { 'latitude': -20, 'longitude': -175 };
        this.latlong['TR'] = { 'latitude': 39, 'longitude': 35 };
        this.latlong['TT'] = { 'latitude': 11, 'longitude': -61 };
        this.latlong['TV'] = { 'latitude': -8, 'longitude': 178 };
        this.latlong['TW'] = { 'latitude': 23.5, 'longitude': 121 };
        this.latlong['TZ'] = { 'latitude': -6, 'longitude': 35 };
        this.latlong['UA'] = { 'latitude': 49, 'longitude': 32 };
        this.latlong['UG'] = { 'latitude': 1, 'longitude': 32 };
        this.latlong['UM'] = { 'latitude': 19.2833, 'longitude': 166.6 };
        this.latlong['US'] = { 'latitude': 38, 'longitude': -97 };
        this.latlong['UY'] = { 'latitude': -33, 'longitude': -56 };
        this.latlong['UZ'] = { 'latitude': 41, 'longitude': 64 };
        this.latlong['VA'] = { 'latitude': 41.9, 'longitude': 12.45 };
        this.latlong['VC'] = { 'latitude': 13.25, 'longitude': -61.2 };
        this.latlong['VE'] = { 'latitude': 8, 'longitude': -66 };
        this.latlong['VG'] = { 'latitude': 18.5, 'longitude': -64.5 };
        this.latlong['VI'] = { 'latitude': 18.3333, 'longitude': -64.8333 };
        this.latlong['VN'] = { 'latitude': 16, 'longitude': 106 };
        this.latlong['VU'] = { 'latitude': -16, 'longitude': 167 };
        this.latlong['WF'] = { 'latitude': -13.3, 'longitude': -176.2 };
        this.latlong['WS'] = { 'latitude': -13.5833, 'longitude': -172.3333 };
        this.latlong['YE'] = { 'latitude': 15, 'longitude': 48 };
        this.latlong['YT'] = { 'latitude': -12.8333, 'longitude': 45.1667 };
        this.latlong['ZA'] = { 'latitude': -29, 'longitude': 24 };
        this.latlong['ZM'] = { 'latitude': -15, 'longitude': 30 };
        this.latlong['ZW'] = { 'latitude': -20, 'longitude': 30 };

        this.mapData = [
          { 'code': 'AF', 'name': 'Afghanistan', 'value': 32358260, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'AL', 'name': 'Albania', 'value': 3215988, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'DZ', 'name': 'Algeria', 'value': 35980193, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'AO', 'name': 'Angola', 'value': 19618432, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'AR', 'name': 'Argentina', 'value': 40764561, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'AM', 'name': 'Armenia', 'value': 3100236, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'AU', 'name': 'Australia', 'value': 22605732, 'color': config.bubbleMapGeoColor5 },
          { 'code': 'AT', 'name': 'Austria', 'value': 8413429, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'AZ', 'name': 'Azerbaijan', 'value': 9306023, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'BH', 'name': 'Bahrain', 'value': 1323535, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'BD', 'name': 'Bangladesh', 'value': 150493658, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'BY', 'name': 'Belarus', 'value': 9559441, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'BE', 'name': 'Belgium', 'value': 10754056, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'BJ', 'name': 'Benin', 'value': 9099922, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'BT', 'name': 'Bhutan', 'value': 738267, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'BO', 'name': 'Bolivia', 'value': 10088108, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'BA', 'name': 'Bosnia and Herzegovina', 'value': 3752228, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'BW', 'name': 'Botswana', 'value': 2030738, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'BR', 'name': 'Brazil', 'value': 196655014, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'BN', 'name': 'Brunei', 'value': 405938, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'BG', 'name': 'Bulgaria', 'value': 7446135, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'BF', 'name': 'Burkina Faso', 'value': 16967845, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'BI', 'name': 'Burundi', 'value': 8575172, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'KH', 'name': 'Cambodia', 'value': 14305183, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'CM', 'name': 'Cameroon', 'value': 20030362, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'CA', 'name': 'Canada', 'value': 34349561, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'CV', 'name': 'Cape Verde', 'value': 500585, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'CF', 'name': 'Central African Rep.', 'value': 4486837, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'TD', 'name': 'Chad', 'value': 11525496, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'CL', 'name': 'Chile', 'value': 17269525, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'CN', 'name': 'China', 'value': 1347565324, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'CO', 'name': 'Colombia', 'value': 46927125, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'KM', 'name': 'Comoros', 'value': 753943, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'CD', 'name': 'Congo, Dem. Rep.', 'value': 67757577, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'CG', 'name': 'Congo, Rep.', 'value': 4139748, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'CR', 'name': 'Costa Rica', 'value': 4726575, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'CI', 'name': 'Cote d\'Ivoire', 'value': 20152894, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'HR', 'name': 'Croatia', 'value': 4395560, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'CU', 'name': 'Cuba', 'value': 11253665, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'CY', 'name': 'Cyprus', 'value': 1116564, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'CZ', 'name': 'Czech Rep.', 'value': 10534293, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'DK', 'name': 'Denmark', 'value': 5572594, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'DJ', 'name': 'Djibouti', 'value': 905564, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'DO', 'name': 'Dominican Rep.', 'value': 10056181, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'EC', 'name': 'Ecuador', 'value': 14666055, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'EG', 'name': 'Egypt', 'value': 82536770, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'SV', 'name': 'El Salvador', 'value': 6227491, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'GQ', 'name': 'Equatorial Guinea', 'value': 720213, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'ER', 'name': 'Eritrea', 'value': 5415280, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'EE', 'name': 'Estonia', 'value': 1340537, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'ET', 'name': 'Ethiopia', 'value': 84734262, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'FJ', 'name': 'Fiji', 'value': 868406, 'color': config.bubbleMapGeoColor5 },
          { 'code': 'FI', 'name': 'Finland', 'value': 5384770, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'FR', 'name': 'France', 'value': 63125894, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'GA', 'name': 'Gabon', 'value': 1534262, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'GM', 'name': 'Gambia', 'value': 1776103, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'GE', 'name': 'Georgia', 'value': 4329026, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'DE', 'name': 'Germany', 'value': 82162512, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'GH', 'name': 'Ghana', 'value': 24965816, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'GR', 'name': 'Greece', 'value': 11390031, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'GT', 'name': 'Guatemala', 'value': 14757316, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'GN', 'name': 'Guinea', 'value': 10221808, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'GW', 'name': 'Guinea-Bissau', 'value': 1547061, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'GY', 'name': 'Guyana', 'value': 756040, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'HT', 'name': 'Haiti', 'value': 10123787, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'HN', 'name': 'Honduras', 'value': 7754687, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'HK', 'name': 'Hong Kong, China', 'value': 7122187, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'HU', 'name': 'Hungary', 'value': 9966116, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'IS', 'name': 'Iceland', 'value': 324366, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'IN', 'name': 'India', 'value': 1241491960, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'ID', 'name': 'Indonesia', 'value': 242325638, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'IR', 'name': 'Iran', 'value': 74798599, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'IQ', 'name': 'Iraq', 'value': 32664942, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'IE', 'name': 'Ireland', 'value': 4525802, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'IL', 'name': 'Israel', 'value': 7562194, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'IT', 'name': 'Italy', 'value': 60788694, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'JM', 'name': 'Jamaica', 'value': 2751273, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'JP', 'name': 'Japan', 'value': 126497241, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'JO', 'name': 'Jordan', 'value': 6330169, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'KZ', 'name': 'Kazakhstan', 'value': 16206750, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'KE', 'name': 'Kenya', 'value': 41609728, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'KP', 'name': 'Korea, Dem. Rep.', 'value': 24451285, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'KR', 'name': 'Korea, Rep.', 'value': 48391343, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'KW', 'name': 'Kuwait', 'value': 2818042, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'KG', 'name': 'Kyrgyzstan', 'value': 5392580, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'LA', 'name': 'Laos', 'value': 6288037, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'LV', 'name': 'Latvia', 'value': 2243142, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'LB', 'name': 'Lebanon', 'value': 4259405, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'LS', 'name': 'Lesotho', 'value': 2193843, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'LR', 'name': 'Liberia', 'value': 4128572, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'LY', 'name': 'Libya', 'value': 6422772, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'LT', 'name': 'Lithuania', 'value': 3307481, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'LU', 'name': 'Luxembourg', 'value': 515941, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'MK', 'name': 'Macedonia, FYR', 'value': 2063893, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'MG', 'name': 'Madagascar', 'value': 21315135, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MW', 'name': 'Malawi', 'value': 15380888, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MY', 'name': 'Malaysia', 'value': 28859154, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'ML', 'name': 'Mali', 'value': 15839538, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MR', 'name': 'Mauritania', 'value': 3541540, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MU', 'name': 'Mauritius', 'value': 1306593, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MX', 'name': 'Mexico', 'value': 114793341, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'MD', 'name': 'Moldova', 'value': 3544864, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'MN', 'name': 'Mongolia', 'value': 2800114, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'ME', 'name': 'Montenegro', 'value': 632261, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'MA', 'name': 'Morocco', 'value': 32272974, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MZ', 'name': 'Mozambique', 'value': 23929708, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'MM', 'name': 'Myanmar', 'value': 48336763, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'NA', 'name': 'Namibia', 'value': 2324004, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'NP', 'name': 'Nepal', 'value': 30485798, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'NL', 'name': 'Netherlands', 'value': 16664746, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'NZ', 'name': 'New Zealand', 'value': 4414509, 'color': config.bubbleMapGeoColor5 },
          { 'code': 'NI', 'name': 'Nicaragua', 'value': 5869859, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'NE', 'name': 'Niger', 'value': 16068994, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'NG', 'name': 'Nigeria', 'value': 162470737, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'NO', 'name': 'Norway', 'value': 4924848, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'OM', 'name': 'Oman', 'value': 2846145, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'PK', 'name': 'Pakistan', 'value': 176745364, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'PA', 'name': 'Panama', 'value': 3571185, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'PG', 'name': 'Papua New Guinea', 'value': 7013829, 'color': config.bubbleMapGeoColor5 },
          { 'code': 'PY', 'name': 'Paraguay', 'value': 6568290, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'PE', 'name': 'Peru', 'value': 29399817, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'PH', 'name': 'Philippines', 'value': 94852030, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'PL', 'name': 'Poland', 'value': 38298949, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'PT', 'name': 'Portugal', 'value': 10689663, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'PR', 'name': 'Puerto Rico', 'value': 3745526, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'QA', 'name': 'Qatar', 'value': 1870041, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'RO', 'name': 'Romania', 'value': 21436495, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'RU', 'name': 'Russia', 'value': 142835555, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'RW', 'name': 'Rwanda', 'value': 10942950, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'SA', 'name': 'Saudi Arabia', 'value': 28082541, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'SN', 'name': 'Senegal', 'value': 12767556, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'RS', 'name': 'Serbia', 'value': 9853969, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'SL', 'name': 'Sierra Leone', 'value': 5997486, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'SG', 'name': 'Singapore', 'value': 5187933, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'SK', 'name': 'Slovak Republic', 'value': 5471502, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'SI', 'name': 'Slovenia', 'value': 2035012, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'SB', 'name': 'Solomon Islands', 'value': 552267, 'color': config.bubbleMapGeoColor5 },
          { 'code': 'SO', 'name': 'Somalia', 'value': 9556873, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'ZA', 'name': 'South Africa', 'value': 50459978, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'ES', 'name': 'Spain', 'value': 46454895, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'LK', 'name': 'Sri Lanka', 'value': 21045394, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'SD', 'name': 'Sudan', 'value': 34735288, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'SR', 'name': 'Suriname', 'value': 529419, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'SZ', 'name': 'Swaziland', 'value': 1203330, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'SE', 'name': 'Sweden', 'value': 9440747, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'CH', 'name': 'Switzerland', 'value': 7701690, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'SY', 'name': 'Syria', 'value': 20766037, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'TW', 'name': 'Taiwan', 'value': 23072000, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'TJ', 'name': 'Tajikistan', 'value': 6976958, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'TZ', 'name': 'Tanzania', 'value': 46218486, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'TH', 'name': 'Thailand', 'value': 69518555, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'TG', 'name': 'Togo', 'value': 6154813, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'TT', 'name': 'Trinidad and Tobago', 'value': 1346350, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'TN', 'name': 'Tunisia', 'value': 10594057, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'TR', 'name': 'Turkey', 'value': 73639596, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'TM', 'name': 'Turkmenistan', 'value': 5105301, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'UG', 'name': 'Uganda', 'value': 34509205, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'UA', 'name': 'Ukraine', 'value': 45190180, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'AE', 'name': 'United Arab Emirates', 'value': 7890924, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'GB', 'name': 'United Kingdom', 'value': 62417431, 'color': config.bubbleMapGeoColor2 },
          { 'code': 'US', 'name': 'United States', 'value': 313085380, 'color': config.bubbleMapGeoColor6 },
          { 'code': 'UY', 'name': 'Uruguay', 'value': 3380008, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'UZ', 'name': 'Uzbekistan', 'value': 27760267, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'VE', 'name': 'Venezuela', 'value': 29436891, 'color': config.bubbleMapGeoColor4 },
          { 'code': 'PS', 'name': 'West Bank and Gaza', 'value': 4152369, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'VN', 'name': 'Vietnam', 'value': 88791996, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'YE', 'name': 'Yemen, Rep.', 'value': 24799880, 'color': config.bubbleMapGeoColor1 },
          { 'code': 'ZM', 'name': 'Zambia', 'value': 13474959, 'color': config.bubbleMapGeoColor3 },
          { 'code': 'ZW', 'name': 'Zimbabwe', 'value': 12754378, 'color': config.bubbleMapGeoColor3 }];

        this.mapData.forEach((itemOpt) => {
          if (itemOpt.value > this.max) {
            this.max = itemOpt.value;
          }
          if (itemOpt.value < this.min) {
            this.min = itemOpt.value;
          }
        });

        this.options = {
          title: {
            text: 'World Population (2011)',
            left: 'center',
            top: 'top',
            textStyle: {
              color: config.bubbleMapTitleColor,
            },
          },
          tooltip: {
            trigger: 'item',
            formatter: params => {
              let value: any = (params.value + '').split('.');
              value = value[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, '$1,')
                + '.' + value[1];
              return params.seriesName + '<br/>' + params.name + ' : ' + params.value;
            },
          },
          visualMap: {
            show: false,
            min: 0,
            max: this.max,
            inRange: {
              symbolSize: [6, 60],
            },
          },
          geo: {
            name: 'World Population (2010)',
            type: 'map',
            map: 'world',
            roam: true,
            label: {
              emphasis: {
                show: false,
              },
            },
            itemStyle: {
              normal: {
                areaColor: config.bubbleMapAreaColor,
                borderColor: config.bubbleMapAreaBorderColor,
              },
              emphasis: {
                areaColor: config.bubbleMapAreaHoverColor,
              },
            },
            zoom: 1.1,
          },
          series: [
            {
              type: 'scatter',
              coordinateSystem: 'geo',
              data: this.mapData.map(itemOpt => {
                return {
                  name: itemOpt.name,
                  value: [
                    this.latlong[itemOpt.code].longitude,
                    this.latlong[itemOpt.code].latitude,
                    itemOpt.value,
                  ],
                  label: {
                    emphasis: {
                      position: 'right',
                      show: true,
                    },
                  },
                  itemStyle: {
                    normal: {
                      color: itemOpt.color,
                    },
                  },
                };
              }),
            },
          ],
        };
      });
  }
}