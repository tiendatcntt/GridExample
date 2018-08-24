import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Grid with Angular';
  
  columnDefs = [
		{headerName: 'Tên hoa quả', field: 'Ten' },
		{headerName: 'Hạng mục', field: 'Loai' },
		{headerName: 'Giá', field: 'Gia'}
	];

	rowData = [
		{ Ten: 'Quả táo', Loai: 'Trái cây', Gia: 35000 },
		{ Ten: 'Quả cam', Loai: 'Trái cây', Gia: 32000 },
		{ Ten: 'Quả chanh', Loai: 'Trái cây', Gia: 72000 }
	];

}
