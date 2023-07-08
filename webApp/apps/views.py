from django.shortcuts import render

# Create your views here.
def index(request):
    if request.method == 'POST':
        form_data = request.POST
        # フォームのデータを処理する
        # ...
        
        return render(request, 'result.html', {'form_data': form_data})
    else:
        return render(request, 'index.html')