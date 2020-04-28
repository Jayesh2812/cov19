from django.shortcuts import render
import urllib , json
# Create your views here.
def current_data():
    url ='https://api.covid19api.com/summary'
    try:
        response = urllib.request.urlopen(url)
        # print("on")
    except:
        response = open('wd.json','r')
        # print("of")
    data =json.loads(response.read())
    total = {
        'confirmed' : data['Global']['TotalConfirmed'],
        'recovered' : data['Global']['TotalRecovered'],
        'death'     : data['Global']['TotalDeaths'],
        'time'      :data['Date']
        }
    countries=[i['Country'] for i in data['Countries']]

    c_data = [[i['TotalConfirmed'],i['TotalDeaths'],i['TotalRecovered']] for i in data['Countries']]

    main_data = dict(zip(countries,c_data))
    return total , main_data
    
def time_lapse():
    url = 'https://pomber.github.io/covid19/timeseries.json'
    try:
        response = urllib.request.urlopen(url)
        # print("on")
    except:
        response = open('timeseries.json','r')
        # print("of")
    data = json.loads(response.read())
    countries = list(data.keys())
    dates = [i['date'] for i in data['US']]
    main_data=[]
    for line in data:
        d={
            'confirmed' : [i['confirmed'] for i in data[line] ],
            'recovered' : [i['recovered'] for i in data[line] ],
            'deaths'    : [i['deaths'] for i in data[line] ]
            }
        main_data.append(d)

    main = dict(zip(countries,main_data))
    return countries , dates , main


def world_view(request):
    render(request,'world/world.html')
    total , world_data = current_data()
    countries ,dates , data = time_lapse()
    # print(len(countries))
    context={
        'total':total,
        'wd':world_data,
        'countries':countries,
        'dates':dates,
        'data':data
    }
    return render(request,'world/world.html',context)
