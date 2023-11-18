import { Component } from '@angular/core';
import { faEarthAmericas, faHeart as faSolidHeart, faComment as faSolidComment, faShareFromSquare as faSolidShare } from '@fortawesome/free-solid-svg-icons';
import { faHeart, faComment, faShareFromSquare } from '@fortawesome/free-regular-svg-icons';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  faGlobe = faEarthAmericas;
  faEmptyHeart = faHeart;
  faSolidHeart = faSolidHeart;
  faComment = faComment;
  faSolidComment = faSolidComment;
  faSolidShare = faSolidShare;
  faShare = faShareFromSquare;
}
