import Avatar from "./Avatar";
import ToolbarButton from "./ToolbarButton";
import Icon from "./Icon";
function PostCard({
  name,
  text,
  avatar,
}: {
  name: string;
  text: string;
  avatar: string;
}) {
  return (
    <div className="bg-gray-100 rounded-2xl p-2 w-full max-w-2xl">
      <div className="bg-white rounded-xl p-4">
        <div className="flex items-center gap-3">
          <Avatar src={avatar} />
          <div className="flex items-center gap-2 text-sm">
            <div className="font-semibold text-gray-900">{name}</div>
            <span className="text-gray-400">•</span>
            <div className="text-xs text-gray-500">5 mins ago</div>
          </div>
        </div>

        <div className="mt-3 flex items-start gap-3">
          <div className="h-8 w-8 inline-flex items-center justify-center rounded-md bg-gray-100">
            <span className="text-lg">🤔</span>
          </div>
          <p className="text-sm text-gray-700 leading-6">{text}</p>
        </div>
      </div>
      <div className="flex items-center gap-1 text-gray-500 p-2 pl-4">
        <ToolbarButton>
          <Icon name="heart" className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton>
          <Icon name="comment" className="h-5 w-5" />
        </ToolbarButton>
        <ToolbarButton>
          <Icon name="share" className="h-4 w-4" />
        </ToolbarButton>
      </div>
    </div>
  );
}

export default PostCard;
