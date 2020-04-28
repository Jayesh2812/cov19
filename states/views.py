from django.shortcuts import render
import json ,urllib
# Create your views here.
def data():
    url = 'https://api.covid19india.org/data.json'
    try:
        response = urllib.request.urlopen(url)
        # print("on")
    except:
        response = open('state2.json','r')
        # rint("of")
    data = json.loads(response.read())
    state_data= (data['statewise'])
    d = [{'confirmed':int(line['confirmed']),'deaths':int(line['deaths']),'recovered':int(line['recovered']) ,'active':int( line['active'])}for line in state_data]
    total = {
    'confirmed':state_data[0]['active'],
    'deaths':state_data[0]['deaths'],
    'recovered':state_data[0]['recovered'],
    'active':state_data[0]['active'],
        'time':state_data[0]['lastupdatedtime'],
        # 'time':'27 April 2019 20:54:31'
    }
    d=d[1:]
    india_data = data[list(data.keys())[0]]
    states = [s['state'] for s in state_data]
    states=states[1:]
    states.insert(states.index('Odisha'),'Orissa')
    states.remove('Odisha')
    main_data = dict(zip(states,d))
    india_timeline=[[i['date'],int(i['totalconfirmed']),int(i['totalrecovered']) ,int(i['totaldeceased'])]for i in india_data]
    return total ,india_timeline,states,main_data



def states_view(request):
    total , tl , states , main = data()
    context={
        'total':total,
        'tl':tl,
        'states':states,
        'main':main,
    }
    return render(request,'states/states.html',context)

