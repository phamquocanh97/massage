<html ng-app="LadiPageBuilder" lang="vi">

<head>
    <style type="text/css">
        .uib-position-measure {
            display: block !important;
            visibility: hidden !important;
            position: absolute !important;
            top: -9999px !important;
            left: -9999px !important;
        }
        
        .uib-position-scrollbar-measure {
            position: absolute !important;
            top: -9999px !important;
            width: 50px !important;
            height: 50px !important;
            overflow: scroll !important;
        }
        
        .uib-position-body-scrollbar-measure {
            overflow: scroll !important;
        }
    </style>
    <style id="ace-chrome">
        .ace-chrome .ace_gutter {
            background: #ebebeb;
            color: #333;
            overflow: hidden;
        }
        
        .ace-chrome .ace_print-margin {
            width: 1px;
            background: #e8e8e8;
        }
        
        .ace-chrome {
            background-color: #FFFFFF;
            color: black;
        }
        
        .ace-chrome .ace_cursor {
            color: black;
        }
        
        .ace-chrome .ace_invisible {
            color: rgb(191, 191, 191);
        }
        
        .ace-chrome .ace_constant.ace_buildin {
            color: rgb(88, 72, 246);
        }
        
        .ace-chrome .ace_constant.ace_language {
            color: rgb(88, 92, 246);
        }
        
        .ace-chrome .ace_constant.ace_library {
            color: rgb(6, 150, 14);
        }
        
        .ace-chrome .ace_invalid {
            background-color: rgb(153, 0, 0);
            color: white;
        }
        
        .ace-chrome .ace_fold {}
        
        .ace-chrome .ace_support.ace_function {
            color: rgb(60, 76, 114);
        }
        
        .ace-chrome .ace_support.ace_constant {
            color: rgb(6, 150, 14);
        }
        
        .ace-chrome .ace_support.ace_type,
        .ace-chrome .ace_support.ace_class.ace-chrome .ace_support.ace_other {
            color: rgb(109, 121, 222);
        }
        
        .ace-chrome .ace_variable.ace_parameter {
            font-style: italic;
            color: #FD971F;
        }
        
        .ace-chrome .ace_keyword.ace_operator {
            color: rgb(104, 118, 135);
        }
        
        .ace-chrome .ace_comment {
            color: #236e24;
        }
        
        .ace-chrome .ace_comment.ace_doc {
            color: #236e24;
        }
        
        .ace-chrome .ace_comment.ace_doc.ace_tag {
            color: #236e24;
        }
        
        .ace-chrome .ace_constant.ace_numeric {
            color: rgb(0, 0, 205);
        }
        
        .ace-chrome .ace_variable {
            color: rgb(49, 132, 149);
        }
        
        .ace-chrome .ace_xml-pe {
            color: rgb(104, 104, 91);
        }
        
        .ace-chrome .ace_entity.ace_name.ace_function {
            color: #0000A2;
        }
        
        .ace-chrome .ace_heading {
            color: rgb(12, 7, 255);
        }
        
        .ace-chrome .ace_list {
            color: rgb(185, 6, 144);
        }
        
        .ace-chrome .ace_marker-layer .ace_selection {
            background: rgb(181, 213, 255);
        }
        
        .ace-chrome .ace_marker-layer .ace_step {
            background: rgb(252, 255, 0);
        }
        
        .ace-chrome .ace_marker-layer .ace_stack {
            background: rgb(164, 229, 101);
        }
        
        .ace-chrome .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid rgb(192, 192, 192);
        }
        
        .ace-chrome .ace_marker-layer .ace_active-line {
            background: rgba(0, 0, 0, 0.07);
        }
        
        .ace-chrome .ace_gutter-active-line {
            background-color: #dcdcdc;
        }
        
        .ace-chrome .ace_marker-layer .ace_selected-word {
            background: rgb(250, 250, 255);
            border: 1px solid rgb(200, 200, 250);
        }
        
        .ace-chrome .ace_storage,
        .ace-chrome .ace_keyword,
        .ace-chrome .ace_meta.ace_tag {
            color: rgb(147, 15, 128);
        }
        
        .ace-chrome .ace_string.ace_regex {
            color: rgb(255, 0, 0)
        }
        
        .ace-chrome .ace_string {
            color: #1A1AA6;
        }
        
        .ace-chrome .ace_entity.ace_other.ace_attribute-name {
            color: #994409;
        }
        
        .ace-chrome .ace_indent-guide {
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
        }
        /*# sourceURL=ace/css/ace-chrome */
    </style>
    <style>
        .error_widget_wrapper {
            background: inherit;
            color: inherit;
            border: none
        }
        
        .error_widget {
            border-top: solid 2px;
            border-bottom: solid 2px;
            margin: 5px 0;
            padding: 10px 40px;
            white-space: pre-wrap;
        }
        
        .error_widget.ace_error,
        .error_widget_arrow.ace_error {
            border-color: #ff5a5a
        }
        
        .error_widget.ace_warning,
        .error_widget_arrow.ace_warning {
            border-color: #F1D817
        }
        
        .error_widget.ace_info,
        .error_widget_arrow.ace_info {
            border-color: #5a5a5a
        }
        
        .error_widget.ace_ok,
        .error_widget_arrow.ace_ok {
            border-color: #5aaa5a
        }
        
        .error_widget_arrow {
            position: absolute;
            border: solid 5px;
            border-top-color: transparent!important;
            border-right-color: transparent!important;
            border-left-color: transparent!important;
            top: -5px;
        }
    </style>
    <style id="ace-tm">
        .ace-tm .ace_gutter {
            background: #f0f0f0;
            color: #333;
        }
        
        .ace-tm .ace_print-margin {
            width: 1px;
            background: #e8e8e8;
        }
        
        .ace-tm .ace_fold {
            background-color: #6B72E6;
        }
        
        .ace-tm {
            background-color: #FFFFFF;
            color: black;
        }
        
        .ace-tm .ace_cursor {
            color: black;
        }
        
        .ace-tm .ace_invisible {
            color: rgb(191, 191, 191);
        }
        
        .ace-tm .ace_storage,
        .ace-tm .ace_keyword {
            color: blue;
        }
        
        .ace-tm .ace_constant {
            color: rgb(197, 6, 11);
        }
        
        .ace-tm .ace_constant.ace_buildin {
            color: rgb(88, 72, 246);
        }
        
        .ace-tm .ace_constant.ace_language {
            color: rgb(88, 92, 246);
        }
        
        .ace-tm .ace_constant.ace_library {
            color: rgb(6, 150, 14);
        }
        
        .ace-tm .ace_invalid {
            background-color: rgba(255, 0, 0, 0.1);
            color: red;
        }
        
        .ace-tm .ace_support.ace_function {
            color: rgb(60, 76, 114);
        }
        
        .ace-tm .ace_support.ace_constant {
            color: rgb(6, 150, 14);
        }
        
        .ace-tm .ace_support.ace_type,
        .ace-tm .ace_support.ace_class {
            color: rgb(109, 121, 222);
        }
        
        .ace-tm .ace_keyword.ace_operator {
            color: rgb(104, 118, 135);
        }
        
        .ace-tm .ace_string {
            color: rgb(3, 106, 7);
        }
        
        .ace-tm .ace_comment {
            color: rgb(76, 136, 107);
        }
        
        .ace-tm .ace_comment.ace_doc {
            color: rgb(0, 102, 255);
        }
        
        .ace-tm .ace_comment.ace_doc.ace_tag {
            color: rgb(128, 159, 191);
        }
        
        .ace-tm .ace_constant.ace_numeric {
            color: rgb(0, 0, 205);
        }
        
        .ace-tm .ace_variable {
            color: rgb(49, 132, 149);
        }
        
        .ace-tm .ace_xml-pe {
            color: rgb(104, 104, 91);
        }
        
        .ace-tm .ace_entity.ace_name.ace_function {
            color: #0000A2;
        }
        
        .ace-tm .ace_heading {
            color: rgb(12, 7, 255);
        }
        
        .ace-tm .ace_list {
            color: rgb(185, 6, 144);
        }
        
        .ace-tm .ace_meta.ace_tag {
            color: rgb(0, 22, 142);
        }
        
        .ace-tm .ace_string.ace_regex {
            color: rgb(255, 0, 0)
        }
        
        .ace-tm .ace_marker-layer .ace_selection {
            background: rgb(181, 213, 255);
        }
        
        .ace-tm.ace_multiselect .ace_selection.ace_start {
            box-shadow: 0 0 3px 0px white;
        }
        
        .ace-tm .ace_marker-layer .ace_step {
            background: rgb(252, 255, 0);
        }
        
        .ace-tm .ace_marker-layer .ace_stack {
            background: rgb(164, 229, 101);
        }
        
        .ace-tm .ace_marker-layer .ace_bracket {
            margin: -1px 0 0 -1px;
            border: 1px solid rgb(192, 192, 192);
        }
        
        .ace-tm .ace_marker-layer .ace_active-line {
            background: rgba(0, 0, 0, 0.07);
        }
        
        .ace-tm .ace_gutter-active-line {
            background-color: #dcdcdc;
        }
        
        .ace-tm .ace_marker-layer .ace_selected-word {
            background: rgb(250, 250, 255);
            border: 1px solid rgb(200, 200, 250);
        }
        
        .ace-tm .ace_indent-guide {
            background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAACCAYAAACZgbYnAAAAE0lEQVQImWP4////f4bLly//BwAmVgd1/w11/gAAAABJRU5ErkJggg==") right repeat-y;
        }
        /*# sourceURL=ace/css/ace-tm */
    </style>
    <style id="ace_editor.css">
        .ace_br1 {
            border-top-left-radius: 3px;
        }
        
        .ace_br2 {
            border-top-right-radius: 3px;
        }
        
        .ace_br3 {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
        }
        
        .ace_br4 {
            border-bottom-right-radius: 3px;
        }
        
        .ace_br5 {
            border-top-left-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        
        .ace_br6 {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        
        .ace_br7 {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
        }
        
        .ace_br8 {
            border-bottom-left-radius: 3px;
        }
        
        .ace_br9 {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_br10 {
            border-top-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_br11 {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_br12 {
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_br13 {
            border-top-left-radius: 3px;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_br14 {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_br15 {
            border-top-left-radius: 3px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            border-bottom-left-radius: 3px;
        }
        
        .ace_editor {
            position: relative;
            overflow: hidden;
            font: 12px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;
            direction: ltr;
            text-align: left;
            -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        }
        
        .ace_scroller {
            position: absolute;
            overflow: hidden;
            top: 0;
            bottom: 0;
            background-color: inherit;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            cursor: text;
        }
        
        .ace_content {
            position: absolute;
            box-sizing: border-box;
            min-width: 100%;
            contain: style size layout;
        }
        
        .ace_dragging .ace_scroller:before {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            content: '';
            background: rgba(250, 250, 250, 0.01);
            z-index: 1000;
        }
        
        .ace_dragging.ace_dark .ace_scroller:before {
            background: rgba(0, 0, 0, 0.01);
        }
        
        .ace_selecting,
        .ace_selecting * {
            cursor: text !important;
        }
        
        .ace_gutter {
            position: absolute;
            overflow: hidden;
            width: auto;
            top: 0;
            bottom: 0;
            left: 0;
            cursor: default;
            z-index: 4;
            -ms-user-select: none;
            -moz-user-select: none;
            -webkit-user-select: none;
            user-select: none;
            contain: style size layout;
        }
        
        .ace_gutter-active-line {
            position: absolute;
            left: 0;
            right: 0;
        }
        
        .ace_scroller.ace_scroll-left {
            box-shadow: 17px 0 16px -16px rgba(0, 0, 0, 0.4) inset;
        }
        
        .ace_gutter-cell {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            padding-left: 19px;
            padding-right: 6px;
            background-repeat: no-repeat;
        }
        
        .ace_gutter-cell.ace_error {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAABOFBMVEX/////////QRswFAb/Ui4wFAYwFAYwFAaWGAfDRymzOSH/PxswFAb/SiUwFAYwFAbUPRvjQiDllog5HhHdRybsTi3/Tyv9Tir+Syj/UC3////XurebMBIwFAb/RSHbPx/gUzfdwL3kzMivKBAwFAbbvbnhPx66NhowFAYwFAaZJg8wFAaxKBDZurf/RB6mMxb/SCMwFAYwFAbxQB3+RB4wFAb/Qhy4Oh+4QifbNRcwFAYwFAYwFAb/QRzdNhgwFAYwFAbav7v/Uy7oaE68MBK5LxLewr/r2NXewLswFAaxJw4wFAbkPRy2PyYwFAaxKhLm1tMwFAazPiQwFAaUGAb/QBrfOx3bvrv/VC/maE4wFAbRPBq6MRO8Qynew8Dp2tjfwb0wFAbx6eju5+by6uns4uH9/f36+vr/GkHjAAAAYnRSTlMAGt+64rnWu/bo8eAA4InH3+DwoN7j4eLi4xP99Nfg4+b+/u9B/eDs1MD1mO7+4PHg2MXa347g7vDizMLN4eG+Pv7i5evs/v79yu7S3/DV7/498Yv24eH+4ufQ3Ozu/v7+y13sRqwAAADLSURBVHjaZc/XDsFgGIBhtDrshlitmk2IrbHFqL2pvXf/+78DPokj7+Fz9qpU/9UXJIlhmPaTaQ6QPaz0mm+5gwkgovcV6GZzd5JtCQwgsxoHOvJO15kleRLAnMgHFIESUEPmawB9ngmelTtipwwfASilxOLyiV5UVUyVAfbG0cCPHig+GBkzAENHS0AstVF6bacZIOzgLmxsHbt2OecNgJC83JERmePUYq8ARGkJx6XtFsdddBQgZE2nPR6CICZhawjA4Fb/chv+399kfR+MMMDGOQAAAABJRU5ErkJggg==");
            background-repeat: no-repeat;
            background-position: 2px center;
        }
        
        .ace_gutter-cell.ace_warning {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAMAAAAoLQ9TAAAAmVBMVEX///8AAAD///8AAAAAAABPSzb/5sAAAAB/blH/73z/ulkAAAAAAAD85pkAAAAAAAACAgP/vGz/rkDerGbGrV7/pkQICAf////e0IsAAAD/oED/qTvhrnUAAAD/yHD/njcAAADuv2r/nz//oTj/p064oGf/zHAAAAA9Nir/tFIAAAD/tlTiuWf/tkIAAACynXEAAAAAAAAtIRW7zBpBAAAAM3RSTlMAABR1m7RXO8Ln31Z36zT+neXe5OzooRDfn+TZ4p3h2hTf4t3k3ucyrN1K5+Xaks52Sfs9CXgrAAAAjklEQVR42o3PbQ+CIBQFYEwboPhSYgoYunIqqLn6/z8uYdH8Vmdnu9vz4WwXgN/xTPRD2+sgOcZjsge/whXZgUaYYvT8QnuJaUrjrHUQreGczuEafQCO/SJTufTbroWsPgsllVhq3wJEk2jUSzX3CUEDJC84707djRc5MTAQxoLgupWRwW6UB5fS++NV8AbOZgnsC7BpEAAAAABJRU5ErkJggg==");
            background-position: 2px center;
        }
        
        .ace_gutter-cell.ace_info {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAAAAAA6mKC9AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAJ0Uk5TAAB2k804AAAAPklEQVQY02NgIB68QuO3tiLznjAwpKTgNyDbMegwisCHZUETUZV0ZqOquBpXj2rtnpSJT1AEnnRmL2OgGgAAIKkRQap2htgAAAAASUVORK5CYII=");
            background-position: 2px center;
        }
        
        .ace_dark .ace_gutter-cell.ace_info {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQBAMAAADt3eJSAAAAJFBMVEUAAAChoaGAgIAqKiq+vr6tra1ZWVmUlJSbm5s8PDxubm56enrdgzg3AAAAAXRSTlMAQObYZgAAAClJREFUeNpjYMAPdsMYHegyJZFQBlsUlMFVCWUYKkAZMxZAGdxlDMQBAG+TBP4B6RyJAAAAAElFTkSuQmCC");
        }
        
        .ace_scrollbar {
            contain: strict;
            position: absolute;
            right: 0;
            bottom: 0;
            z-index: 6;
        }
        
        .ace_scrollbar-inner {
            position: absolute;
            cursor: text;
            left: 0;
            top: 0;
        }
        
        .ace_scrollbar-v {
            overflow-x: hidden;
            overflow-y: scroll;
            top: 0;
        }
        
        .ace_scrollbar-h {
            overflow-x: scroll;
            overflow-y: hidden;
            left: 0;
        }
        
        .ace_print-margin {
            position: absolute;
            height: 100%;
        }
        
        .ace_text-input {
            position: absolute;
            z-index: 0;
            width: 0.5em;
            height: 1em;
            opacity: 0;
            background: transparent;
            -moz-appearance: none;
            appearance: none;
            border: none;
            resize: none;
            outline: none;
            overflow: hidden;
            font: inherit;
            padding: 0 1px;
            margin: 0 -1px;
            contain: strict;
            -ms-user-select: text;
            -moz-user-select: text;
            -webkit-user-select: text;
            user-select: text;
            white-space: pre!important;
        }
        
        .ace_text-input.ace_composition {
            background: transparent;
            color: inherit;
            z-index: 1000;
            opacity: 1;
        }
        
        .ace_composition_placeholder {
            color: transparent
        }
        
        .ace_composition_marker {
            border-bottom: 1px solid;
            position: absolute;
            border-radius: 0;
            margin-top: 1px;
        }
        
        [ace_nocontext=true] {
            transform: none!important;
            filter: none!important;
            perspective: none!important;
            clip-path: none!important;
            mask: none!important;
            contain: none!important;
            perspective: none!important;
            mix-blend-mode: initial!important;
            z-index: auto;
        }
        
        .ace_layer {
            z-index: 1;
            position: absolute;
            overflow: hidden;
            word-wrap: normal;
            white-space: pre;
            height: 100%;
            width: 100%;
            box-sizing: border-box;
            pointer-events: none;
        }
        
        .ace_gutter-layer {
            position: relative;
            width: auto;
            text-align: right;
            pointer-events: auto;
            height: 1000000px;
            contain: style size layout;
        }
        
        .ace_text-layer {
            font: inherit !important;
            position: absolute;
            height: 1000000px;
            width: 1000000px;
            contain: style size layout;
        }
        
        .ace_text-layer>.ace_line,
        .ace_text-layer>.ace_line_group {
            contain: style size layout;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
        }
        
        .ace_hidpi .ace_text-layer,
        .ace_hidpi .ace_gutter-layer,
        .ace_hidpi .ace_content,
        .ace_hidpi .ace_gutter {
            contain: strict;
            will-change: transform;
        }
        
        .ace_hidpi .ace_text-layer>.ace_line,
        .ace_hidpi .ace_text-layer>.ace_line_group {
            contain: strict;
        }
        
        .ace_cjk {
            display: inline-block;
            text-align: center;
        }
        
        .ace_cursor-layer {
            z-index: 4;
        }
        
        .ace_cursor {
            z-index: 4;
            position: absolute;
            box-sizing: border-box;
            border-left: 2px solid;
            transform: translatez(0);
        }
        
        .ace_multiselect .ace_cursor {
            border-left-width: 1px;
        }
        
        .ace_slim-cursors .ace_cursor {
            border-left-width: 1px;
        }
        
        .ace_overwrite-cursors .ace_cursor {
            border-left-width: 0;
            border-bottom: 1px solid;
        }
        
        .ace_hidden-cursors .ace_cursor {
            opacity: 0.2;
        }
        
        .ace_smooth-blinking .ace_cursor {
            transition: opacity 0.18s;
        }
        
        .ace_animate-blinking .ace_cursor {
            animation-duration: 1000ms;
            animation-timing-function: step-end;
            animation-name: blink-ace-animate;
            animation-iteration-count: infinite;
        }
        
        .ace_animate-blinking.ace_smooth-blinking .ace_cursor {
            animation-duration: 1000ms;
            animation-timing-function: ease-in-out;
            animation-name: blink-ace-animate-smooth;
        }
        
        @keyframes blink-ace-animate {
            from,
            to {
                opacity: 1;
            }
            60% {
                opacity: 0;
            }
        }
        
        @keyframes blink-ace-animate-smooth {
            from,
            to {
                opacity: 1;
            }
            45% {
                opacity: 1;
            }
            60% {
                opacity: 0;
            }
            85% {
                opacity: 0;
            }
        }
        
        .ace_marker-layer .ace_step,
        .ace_marker-layer .ace_stack {
            position: absolute;
            z-index: 3;
        }
        
        .ace_marker-layer .ace_selection {
            position: absolute;
            z-index: 5;
        }
        
        .ace_marker-layer .ace_bracket {
            position: absolute;
            z-index: 6;
        }
        
        .ace_marker-layer .ace_active-line {
            position: absolute;
            z-index: 2;
        }
        
        .ace_marker-layer .ace_selected-word {
            position: absolute;
            z-index: 4;
            box-sizing: border-box;
        }
        
        .ace_line .ace_fold {
            box-sizing: border-box;
            display: inline-block;
            height: 11px;
            margin-top: -2px;
            vertical-align: middle;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACJJREFUeNpi+P//fxgTAwPDBxDxD078RSX+YeEyDFMCIMAAI3INmXiwf2YAAAAASUVORK5CYII=");
            background-repeat: no-repeat, repeat-x;
            background-position: center center, top left;
            color: transparent;
            border: 1px solid black;
            border-radius: 2px;
            cursor: pointer;
            pointer-events: auto;
        }
        
        .ace_dark .ace_fold {}
        
        .ace_fold:hover {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAJCAYAAADU6McMAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAJpJREFUeNpi/P//PwOlgAXGYGRklAVSokD8GmjwY1wasKljQpYACtpCFeADcHVQfQyMQAwzwAZI3wJKvCLkfKBaMSClBlR7BOQikCFGQEErIH0VqkabiGCAqwUadAzZJRxQr/0gwiXIal8zQQPnNVTgJ1TdawL0T5gBIP1MUJNhBv2HKoQHHjqNrA4WO4zY0glyNKLT2KIfIMAAQsdgGiXvgnYAAAAASUVORK5CYII="), url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAA3CAYAAADNNiA5AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAACBJREFUeNpi+P//fz4TAwPDZxDxD5X4i5fLMEwJgAADAEPVDbjNw87ZAAAAAElFTkSuQmCC");
        }
        
        .ace_tooltip {
            background-color: #FFF;
            background-image: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.1));
            border: 1px solid gray;
            border-radius: 1px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
            color: black;
            max-width: 100%;
            padding: 3px 4px;
            position: fixed;
            z-index: 999999;
            box-sizing: border-box;
            cursor: default;
            white-space: pre;
            word-wrap: break-word;
            line-height: normal;
            font-style: normal;
            font-weight: normal;
            letter-spacing: normal;
            pointer-events: none;
        }
        
        .ace_folding-enabled>.ace_gutter-cell {
            padding-right: 13px;
        }
        
        .ace_fold-widget {
            box-sizing: border-box;
            margin: 0 -12px 0 1px;
            display: none;
            width: 11px;
            vertical-align: top;
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42mWKsQ0AMAzC8ixLlrzQjzmBiEjp0A6WwBCSPgKAXoLkqSot7nN3yMwR7pZ32NzpKkVoDBUxKAAAAABJRU5ErkJggg==");
            background-repeat: no-repeat;
            background-position: center;
            border-radius: 3px;
            border: 1px solid transparent;
            cursor: pointer;
        }
        
        .ace_folding-enabled .ace_fold-widget {
            display: inline-block;
        }
        
        .ace_fold-widget.ace_end {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAANElEQVR42m3HwQkAMAhD0YzsRchFKI7sAikeWkrxwScEB0nh5e7KTPWimZki4tYfVbX+MNl4pyZXejUO1QAAAABJRU5ErkJggg==");
        }
        
        .ace_fold-widget.ace_closed {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAGCAYAAAAG5SQMAAAAOUlEQVR42jXKwQkAMAgDwKwqKD4EwQ26sSOkVWjgIIHAzPiCgaqiqnJHZnKICBERHN194O5b9vbLuAVRL+l0YWnZAAAAAElFTkSuQmCCXA==");
        }
        
        .ace_fold-widget:hover {
            border: 1px solid rgba(0, 0, 0, 0.3);
            background-color: rgba(255, 255, 255, 0.2);
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.7);
        }
        
        .ace_fold-widget:active {
            border: 1px solid rgba(0, 0, 0, 0.4);
            background-color: rgba(0, 0, 0, 0.05);
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.8);
        }
        
        .ace_dark .ace_fold-widget {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHklEQVQIW2P4//8/AzoGEQ7oGCaLLAhWiSwB146BAQCSTPYocqT0AAAAAElFTkSuQmCC");
        }
        
        .ace_dark .ace_fold-widget.ace_end {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAH0lEQVQIW2P4//8/AxQ7wNjIAjDMgC4AxjCVKBirIAAF0kz2rlhxpAAAAABJRU5ErkJggg==");
        }
        
        .ace_dark .ace_fold-widget.ace_closed {
            background-image: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAAFCAYAAACAcVaiAAAAHElEQVQIW2P4//+/AxAzgDADlOOAznHAKgPWAwARji8UIDTfQQAAAABJRU5ErkJggg==");
        }
        
        .ace_dark .ace_fold-widget:hover {
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
            background-color: rgba(255, 255, 255, 0.1);
        }
        
        .ace_dark .ace_fold-widget:active {
            box-shadow: 0 1px 1px rgba(255, 255, 255, 0.2);
        }
        
        .ace_inline_button {
            border: 1px solid lightgray;
            display: inline-block;
            margin: -1px 8px;
            padding: 0 5px;
            pointer-events: auto;
            cursor: pointer;
        }
        
        .ace_inline_button:hover {
            border-color: gray;
            background: rgba(200, 200, 200, 0.2);
            display: inline-block;
            pointer-events: auto;
        }
        
        .ace_fold-widget.ace_invalid {
            background-color: #FFB4B4;
            border-color: #DE5555;
        }
        
        .ace_fade-fold-widgets .ace_fold-widget {
            transition: opacity 0.4s ease 0.05s;
            opacity: 0;
        }
        
        .ace_fade-fold-widgets:hover .ace_fold-widget {
            transition: opacity 0.05s ease 0.05s;
            opacity: 1;
        }
        
        .ace_underline {
            text-decoration: underline;
        }
        
        .ace_bold {
            font-weight: bold;
        }
        
        .ace_nobold .ace_bold {
            font-weight: normal;
        }
        
        .ace_italic {
            font-style: italic;
        }
        
        .ace_error-marker {
            background-color: rgba(255, 0, 0, 0.2);
            position: absolute;
            z-index: 9;
        }
        
        .ace_highlight-marker {
            background-color: rgba(255, 255, 0, 0.2);
            position: absolute;
            z-index: 8;
        }
        /*# sourceURL=ace/css/ace_editor.css */
    </style>
    <style>
        @charset "UTF-8";
        [ng\:cloak],
        [ng-cloak],
        [data-ng-cloak],
        [x-ng-cloak],
        .ng-cloak,
        .x-ng-cloak,
        .ng-hide:not(.ng-hide-animate) {
            display: none !important;
        }
        
        ng\:form {
            display: block;
        }
        
        .ng-animate-shim {
            visibility: hidden;
        }
        
        .ng-anchor {
            position: absolute;
        }
    </style>
    <base href="/">
    <title ng-bind="pageSettings.title">XTRAZEX | LadiPage Builder</title>
    <meta charset="UTF-8">
    <meta http-equiv="Cache-Control" content="no-cache">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Expires" content="-1">
    <meta name="viewport" content="width=device-width,initial-scale=1,maximum-scale=1,user-scalable=0">
    <meta name="description" content="">
    <meta name="author" content="LadiPage Team">
    <link rel="dns-prefetch">
    <link rel="preconnect" href="https://fonts.googleapis.com/" crossorigin="">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <link rel="preconnect" href="https://w.ladicdn.com/" crossorigin="">
    <link rel="preconnect" href="https://s.ladicdn.com/" crossorigin="">
    <link rel="preconnect" href="https://api.ladipage.com/" crossorigin="">
    <link rel="preconnect" href="https://api.files.ladicdn.com/" crossorigin="">
    <link rel="preconnect" href="https://capture.api.ladipage.com/" crossorigin="">
    <link rel="shortcut icon" type="image/svg+xml" href="https://w.ladicdn.com/ladiui/ladipage/ladipage-icon.svg">
    <!-- Google Tag Manager -->
    <script type="text/javascript" async="" src="https://www.google-analytics.com/analytics.js"></script>
    <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/js?id=G-S276BNH4GQ&amp;l=dataLayer&amp;cx=c"></script>
    <script src="https://connect.facebook.net/signals/config/1520656564722849?v=2.9.149&amp;r=stable&amp;domain=builder.ladipage.com&amp;hme=8b8eb2472f555e54a8b57f2b720f9bd3b1bc6aed031525376dd772ba51107995&amp;ex_m=63%2C107%2C95%2C99%2C54%2C3%2C89%2C62%2C14%2C87%2C80%2C45%2C47%2C153%2C156%2C167%2C163%2C164%2C166%2C26%2C90%2C46%2C69%2C165%2C148%2C151%2C160%2C161%2C168%2C116%2C13%2C44%2C172%2C171%2C118%2C16%2C30%2C33%2C1%2C37%2C58%2C59%2C60%2C64%2C84%2C15%2C12%2C86%2C83%2C82%2C96%2C98%2C32%2C97%2C27%2C23%2C149%2C152%2C125%2C25%2C9%2C10%2C11%2C5%2C6%2C22%2C19%2C20%2C50%2C55%2C57%2C67%2C91%2C24%2C68%2C8%2C7%2C72%2C42%2C18%2C93%2C92%2C17%2C74%2C79%2C41%2C40%2C78%2C34%2C36%2C77%2C49%2C75%2C29%2C38%2C66%2C0%2C85%2C4%2C81%2C73%2C76%2C2%2C31%2C56%2C35%2C94%2C39%2C71%2C61%2C100%2C53%2C52%2C28%2C88%2C51%2C48%2C43%2C70%2C65%2C21%2C101%2C178%2C177%2C179%2C184%2C185%2C186%2C182%2C174%2C117%2C119%2C173%2C175%2C108%2C139%2C130%2C134%2C114%2C169%2C209%2C145%2C102%2C112%2C210%2C147%2C106%2C128%2C121%2C109"
        async=""></script>
    <script src="https://connect.facebook.net/signals/config/534321507144346?v=2.9.149&amp;r=stable&amp;domain=builder.ladipage.com&amp;hme=8b8eb2472f555e54a8b57f2b720f9bd3b1bc6aed031525376dd772ba51107995&amp;ex_m=63%2C107%2C95%2C99%2C54%2C3%2C89%2C62%2C14%2C87%2C80%2C45%2C47%2C153%2C156%2C167%2C163%2C164%2C166%2C26%2C90%2C46%2C69%2C165%2C148%2C151%2C160%2C161%2C168%2C116%2C13%2C44%2C172%2C171%2C118%2C16%2C30%2C33%2C1%2C37%2C58%2C59%2C60%2C64%2C84%2C15%2C12%2C86%2C83%2C82%2C96%2C98%2C32%2C97%2C27%2C23%2C149%2C152%2C125%2C25%2C9%2C10%2C11%2C5%2C6%2C22%2C19%2C20%2C50%2C55%2C57%2C67%2C91%2C24%2C68%2C8%2C7%2C72%2C42%2C18%2C93%2C92%2C17%2C74%2C79%2C41%2C40%2C78%2C34%2C36%2C77%2C49%2C75%2C29%2C38%2C66%2C0%2C85%2C4%2C81%2C73%2C76%2C2%2C31%2C56%2C35%2C94%2C39%2C71%2C61%2C100%2C53%2C52%2C28%2C88%2C51%2C48%2C43%2C70%2C65%2C21%2C101"
        async=""></script>
    <script async="" src="https://connect.facebook.net/en_US/fbevents.js"></script>
    <script type="text/javascript" async="" src="https://www.googletagmanager.com/gtag/destination?id=AW-865252168&amp;l=dataLayer&amp;cx=c"></script>
    <script async="" src="https://www.googletagmanager.com/gtm.js?id=GTM-5MZGCD3"></script>
    <script>
        (function(w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-5MZGCD3');
    </script>
    <!-- End Google Tag Manager -->
    <link rel="stylesheet" type="text/css" href="https://w.ladicdn.com/ladiui/ladiui.min.css?v=1710410831294">
    <link rel="stylesheet" type="text/css" href="https://w.ladicdn.com/v4/source/builder/css/builder.chunk.css?v=1710410831294">
    <style type="text/css">
        #assets-group-type-pagination {
            display: none !important;
        }
    </style>
    <script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/865252168/?random=1710425851992&amp;cv=11&amp;fst=1710425851992&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be43b0v888724000z876134956za201&amp;gcd=13l3l3l3l1&amp;dma=0&amp;u_w=430&amp;u_h=932&amp;url=https%3A%2F%2Fbuilder.ladipage.com%2Feditor%2F5cee604ed062e8345a243b4b&amp;ref=https%3A%2F%2Fbuilder.ladipage.com%2F%3FLADI_CLIENT_ID%3D19221cd9-5079-428d-81d6-16704a18dabe&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=LadiPage%20Builder&amp;npa=0&amp;pscdl=treatment_1.2&amp;auid=500067306.1709517278&amp;uamb=0&amp;uaw=0&amp;fledge=1&amp;rfmt=3&amp;fmt=4"></script>
    <script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/866447905/?random=1710425852106&amp;cv=11&amp;fst=1710425852106&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be43b0v899189588za200&amp;gcd=13l3l3l3l1&amp;dma=0&amp;u_w=430&amp;u_h=932&amp;url=https%3A%2F%2Fbuilder.ladipage.com%2Feditor%2F5cee604ed062e8345a243b4b&amp;ref=https%3A%2F%2Fbuilder.ladipage.com%2F%3FLADI_CLIENT_ID%3D19221cd9-5079-428d-81d6-16704a18dabe&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=LadiPage%20Builder&amp;npa=0&amp;pscdl=treatment_1.2&amp;auid=500067306.1709517278&amp;uamb=0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script>
    <script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/866447905/?random=1710425852130&amp;cv=11&amp;fst=1710425852130&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be43b0v899189588za200&amp;gcd=13l3l3l3l1&amp;dma=0&amp;u_w=430&amp;u_h=932&amp;url=https%3A%2F%2Fbuilder.ladipage.com%2Feditor%2F5cee604ed062e8345a243b4b&amp;ref=https%3A%2F%2Fbuilder.ladipage.com%2F%3FLADI_CLIENT_ID%3D19221cd9-5079-428d-81d6-16704a18dabe&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=LadiPage%20Builder&amp;userId=replace%20with%20value&amp;npa=0&amp;pscdl=treatment_1.2&amp;auid=500067306.1709517278&amp;uamb=0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dpage_view&amp;rfmt=3&amp;fmt=4"></script>
    <script type="text/javascript" async="" src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/865252168/?random=1710425852177&amp;cv=11&amp;fst=1710425852177&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be43b0v888724000za200&amp;gcd=13l3l3l3l1&amp;dma=0&amp;u_w=430&amp;u_h=932&amp;url=https%3A%2F%2Fbuilder.ladipage.com%2Feditor%2F5cee604ed062e8345a243b4b&amp;ref=https%3A%2F%2Fbuilder.ladipage.com%2F%3FLADI_CLIENT_ID%3D19221cd9-5079-428d-81d6-16704a18dabe&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=LadiPage%20Builder&amp;npa=0&amp;pscdl=treatment_1.2&amp;auid=500067306.1709517278&amp;uamb=0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dgtag.config&amp;rfmt=3&amp;fmt=4"></script>
    <style id="animate.css" type="text/css">
        @-webkit-keyframes bounce {
            0%,
            100%,
            20%,
            50%,
            80% {
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
            40% {
                -webkit-transform: translateY(-30px);
                transform: translateY(-30px);
            }
            60% {
                -webkit-transform: translateY(-15px);
                transform: translateY(-15px);
            }
        }
        
        @keyframes bounce {
            0%,
            100%,
            20%,
            50%,
            80% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
            40% {
                -webkit-transform: translateY(-30px);
                -ms-transform: translateY(-30px);
                transform: translateY(-30px);
            }
            60% {
                -webkit-transform: translateY(-15px);
                -ms-transform: translateY(-15px);
                transform: translateY(-15px);
            }
        }
        
        @-webkit-keyframes flash {
            0%,
            100%,
            50% {
                opacity: 1;
            }
            25%,
            75% {
                opacity: 0;
            }
        }
        
        @keyframes flash {
            0%,
            100%,
            50% {
                opacity: 1;
            }
            25%,
            75% {
                opacity: 0;
            }
        }
        
        @-webkit-keyframes pulse {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
            50% {
                -webkit-transform: scale(1.1);
                transform: scale(1.1);
            }
            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
        
        @keyframes pulse {
            0% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
            50% {
                -webkit-transform: scale(1.1);
                -ms-transform: scale(1.1);
                transform: scale(1.1);
            }
            100% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
        }
        
        @-webkit-keyframes rubberBand {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
            30% {
                -webkit-transform: scaleX(1.25) scaleY(0.75);
                transform: scaleX(1.25) scaleY(0.75);
            }
            40% {
                -webkit-transform: scaleX(0.75) scaleY(1.25);
                transform: scaleX(0.75) scaleY(1.25);
            }
            60% {
                -webkit-transform: scaleX(1.15) scaleY(0.85);
                transform: scaleX(1.15) scaleY(0.85);
            }
            100% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
        
        @keyframes rubberBand {
            0% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
            30% {
                -webkit-transform: scaleX(1.25) scaleY(0.75);
                -ms-transform: scaleX(1.25) scaleY(0.75);
                transform: scaleX(1.25) scaleY(0.75);
            }
            40% {
                -webkit-transform: scaleX(0.75) scaleY(1.25);
                -ms-transform: scaleX(0.75) scaleY(1.25);
                transform: scaleX(0.75) scaleY(1.25);
            }
            60% {
                -webkit-transform: scaleX(1.15) scaleY(0.85);
                -ms-transform: scaleX(1.15) scaleY(0.85);
                transform: scaleX(1.15) scaleY(0.85);
            }
            100% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
        }
        
        @-webkit-keyframes shake {
            0%,
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
            10%,
            30%,
            50%,
            70%,
            90% {
                -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
            }
            20%,
            40%,
            60%,
            80% {
                -webkit-transform: translateX(10px);
                transform: translateX(10px);
            }
        }
        
        @keyframes shake {
            0%,
            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
            10%,
            30%,
            50%,
            70%,
            90% {
                -webkit-transform: translateX(-10px);
                -ms-transform: translateX(-10px);
                transform: translateX(-10px);
            }
            20%,
            40%,
            60%,
            80% {
                -webkit-transform: translateX(10px);
                -ms-transform: translateX(10px);
                transform: translateX(10px);
            }
        }
        
        @-webkit-keyframes swing {
            20% {
                -webkit-transform: rotate(15deg);
                transform: rotate(15deg);
            }
            40% {
                -webkit-transform: rotate(-10deg);
                transform: rotate(-10deg);
            }
            60% {
                -webkit-transform: rotate(5deg);
                transform: rotate(5deg);
            }
            80% {
                -webkit-transform: rotate(-5deg);
                transform: rotate(-5deg);
            }
            100% {
                -webkit-transform: rotate(0);
                transform: rotate(0);
            }
        }
        
        @keyframes swing {
            20% {
                -webkit-transform: rotate(15deg);
                -ms-transform: rotate(15deg);
                transform: rotate(15deg);
            }
            40% {
                -webkit-transform: rotate(-10deg);
                -ms-transform: rotate(-10deg);
                transform: rotate(-10deg);
            }
            60% {
                -webkit-transform: rotate(5deg);
                -ms-transform: rotate(5deg);
                transform: rotate(5deg);
            }
            80% {
                -webkit-transform: rotate(-5deg);
                -ms-transform: rotate(-5deg);
                transform: rotate(-5deg);
            }
            100% {
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
            }
        }
        
        @-webkit-keyframes tada {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1);
            }
            10%,
            20% {
                -webkit-transform: scale(0.9) rotate(-3deg);
                transform: scale(0.9) rotate(-3deg);
            }
            30%,
            50%,
            70%,
            90% {
                -webkit-transform: scale(1.1) rotate(3deg);
                transform: scale(1.1) rotate(3deg);
            }
            40%,
            60%,
            80% {
                -webkit-transform: scale(1.1) rotate(-3deg);
                transform: scale(1.1) rotate(-3deg);
            }
            100% {
                -webkit-transform: scale(1) rotate(0);
                transform: scale(1) rotate(0);
            }
        }
        
        @keyframes tada {
            0% {
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
            10%,
            20% {
                -webkit-transform: scale(0.9) rotate(-3deg);
                -ms-transform: scale(0.9) rotate(-3deg);
                transform: scale(0.9) rotate(-3deg);
            }
            30%,
            50%,
            70%,
            90% {
                -webkit-transform: scale(1.1) rotate(3deg);
                -ms-transform: scale(1.1) rotate(3deg);
                transform: scale(1.1) rotate(3deg);
            }
            40%,
            60%,
            80% {
                -webkit-transform: scale(1.1) rotate(-3deg);
                -ms-transform: scale(1.1) rotate(-3deg);
                transform: scale(1.1) rotate(-3deg);
            }
            100% {
                -webkit-transform: scale(1) rotate(0);
                -ms-transform: scale(1) rotate(0);
                transform: scale(1) rotate(0);
            }
        }
        
        @-webkit-keyframes wobble {
            0% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
            15% {
                -webkit-transform: translateX(-25%) rotate(-5deg);
                transform: translateX(-25%) rotate(-5deg);
            }
            30% {
                -webkit-transform: translateX(20%) rotate(3deg);
                transform: translateX(20%) rotate(3deg);
            }
            45% {
                -webkit-transform: translateX(-15%) rotate(-3deg);
                transform: translateX(-15%) rotate(-3deg);
            }
            60% {
                -webkit-transform: translateX(10%) rotate(2deg);
                transform: translateX(10%) rotate(2deg);
            }
            75% {
                -webkit-transform: translateX(-5%) rotate(-1deg);
                transform: translateX(-5%) rotate(-1deg);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes wobble {
            0% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
            15% {
                -webkit-transform: translateX(-25%) rotate(-5deg);
                -ms-transform: translateX(-25%) rotate(-5deg);
                transform: translateX(-25%) rotate(-5deg);
            }
            30% {
                -webkit-transform: translateX(20%) rotate(3deg);
                -ms-transform: translateX(20%) rotate(3deg);
                transform: translateX(20%) rotate(3deg);
            }
            45% {
                -webkit-transform: translateX(-15%) rotate(-3deg);
                -ms-transform: translateX(-15%) rotate(-3deg);
                transform: translateX(-15%) rotate(-3deg);
            }
            60% {
                -webkit-transform: translateX(10%) rotate(2deg);
                -ms-transform: translateX(10%) rotate(2deg);
                transform: translateX(10%) rotate(2deg);
            }
            75% {
                -webkit-transform: translateX(-5%) rotate(-1deg);
                -ms-transform: translateX(-5%) rotate(-1deg);
                transform: translateX(-5%) rotate(-1deg);
            }
            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes bounceIn {
            0% {
                opacity: 0;
                -webkit-transform: scale(0.3);
                transform: scale(0.3);
            }
            50% {
                opacity: 1;
                -webkit-transform: scale(1.05);
                transform: scale(1.05);
            }
            70% {
                -webkit-transform: scale(0.9);
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                -webkit-transform: scale(1);
                transform: scale(1);
            }
        }
        
        @keyframes bounceIn {
            0% {
                opacity: 0;
                -webkit-transform: scale(0.3);
                -ms-transform: scale(0.3);
                transform: scale(0.3);
            }
            50% {
                opacity: 1;
                -webkit-transform: scale(1.05);
                -ms-transform: scale(1.05);
                transform: scale(1.05);
            }
            70% {
                -webkit-transform: scale(0.9);
                -ms-transform: scale(0.9);
                transform: scale(0.9);
            }
            100% {
                opacity: 1;
                -webkit-transform: scale(1);
                -ms-transform: scale(1);
                transform: scale(1);
            }
        }
        
        @-webkit-keyframes bounceInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-2000px);
                transform: translateY(-2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateY(30px);
                transform: translateY(30px);
            }
            80% {
                -webkit-transform: translateY(-10px);
                transform: translateY(-10px);
            }
            100% {
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes bounceInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-2000px);
                -ms-transform: translateY(-2000px);
                transform: translateY(-2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateY(30px);
                -ms-transform: translateY(30px);
                transform: translateY(30px);
            }
            80% {
                -webkit-transform: translateY(-10px);
                -ms-transform: translateY(-10px);
                transform: translateY(-10px);
            }
            100% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes bounceInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateX(30px);
                transform: translateX(30px);
            }
            80% {
                -webkit-transform: translateX(-10px);
                transform: translateX(-10px);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes bounceInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                -ms-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateX(30px);
                -ms-transform: translateX(30px);
                transform: translateX(30px);
            }
            80% {
                -webkit-transform: translateX(-10px);
                -ms-transform: translateX(-10px);
                transform: translateX(-10px);
            }
            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes bounceInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                transform: translateX(2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateX(-30px);
                transform: translateX(-30px);
            }
            80% {
                -webkit-transform: translateX(10px);
                transform: translateX(10px);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes bounceInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                -ms-transform: translateX(2000px);
                transform: translateX(2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateX(-30px);
                -ms-transform: translateX(-30px);
                transform: translateX(-30px);
            }
            80% {
                -webkit-transform: translateX(10px);
                -ms-transform: translateX(10px);
                transform: translateX(10px);
            }
            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes bounceInUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(2000px);
                transform: translateY(2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateY(-30px);
                transform: translateY(-30px);
            }
            80% {
                -webkit-transform: translateY(10px);
                transform: translateY(10px);
            }
            100% {
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes bounceInUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(2000px);
                -ms-transform: translateY(2000px);
                transform: translateY(2000px);
            }
            60% {
                opacity: 1;
                -webkit-transform: translateY(-30px);
                -ms-transform: translateY(-30px);
                transform: translateY(-30px);
            }
            80% {
                -webkit-transform: translateY(10px);
                -ms-transform: translateY(10px);
                transform: translateY(10px);
            }
            100% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        
        @keyframes fadeIn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
        
        @-webkit-keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-20px);
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-20px);
                -ms-transform: translateY(-20px);
                transform: translateY(-20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes fadeInDownBig {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-2000px);
                transform: translateY(-2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInDownBig {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-2000px);
                -ms-transform: translateY(-2000px);
                transform: translateY(-2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes fadeInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-20px);
                transform: translateX(-20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-20px);
                -ms-transform: translateX(-20px);
                transform: translateX(-20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes fadeInLeftBig {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInLeftBig {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                -ms-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes fadeInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(20px);
                transform: translateX(20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(40px);
                -ms-transform: translateX(40px);
                transform: translateX(40px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes fadeInRightBig {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                transform: translateX(2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes fadeInRightBig {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                -ms-transform: translateX(2000px);
                transform: translateX(2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes fadeInUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(20px);
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(20px);
                -ms-transform: translateY(20px);
                transform: translateY(20px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes fadeInUpBig {
            0% {
                opacity: 0;
                -webkit-transform: translateY(2000px);
                transform: translateY(2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes fadeInUpBig {
            0% {
                opacity: 0;
                -webkit-transform: translateY(2000px);
                -ms-transform: translateY(2000px);
                transform: translateY(2000px);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes flip {
            0% {
                -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
                transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
            }
            40% {
                -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
                transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
            }
            50% {
                -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
                transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
            }
            80% {
                -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(0.95);
                transform: perspective(400px) translateZ(0) rotateY(360deg) scale(0.95);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
            }
            100% {
                -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
                transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
            }
        }
        
        @keyframes flip {
            0% {
                -webkit-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
                -ms-transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
                transform: perspective(400px) translateZ(0) rotateY(0) scale(1);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
            }
            40% {
                -webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
                -ms-transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
                transform: perspective(400px) translateZ(150px) rotateY(170deg) scale(1);
                -webkit-animation-timing-function: ease-out;
                animation-timing-function: ease-out;
            }
            50% {
                -webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
                -ms-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
                transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
            }
            80% {
                -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(0.95);
                -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(0.95);
                transform: perspective(400px) translateZ(0) rotateY(360deg) scale(0.95);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
            }
            100% {
                -webkit-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
                -ms-transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
                transform: perspective(400px) translateZ(0) rotateY(360deg) scale(1);
                -webkit-animation-timing-function: ease-in;
                animation-timing-function: ease-in;
            }
        }
        
        @-webkit-keyframes flipInX {
            0% {
                -webkit-transform: perspective(400px) rotateX(90deg);
                transform: perspective(400px) rotateX(90deg);
                opacity: 0;
            }
            40% {
                -webkit-transform: perspective(400px) rotateX(-10deg);
                transform: perspective(400px) rotateX(-10deg);
            }
            70% {
                -webkit-transform: perspective(400px) rotateX(10deg);
                transform: perspective(400px) rotateX(10deg);
            }
            100% {
                -webkit-transform: perspective(400px) rotateX(0);
                transform: perspective(400px) rotateX(0);
                opacity: 1;
            }
        }
        
        @keyframes flipInX {
            0% {
                -webkit-transform: perspective(400px) rotateX(90deg);
                -ms-transform: perspective(400px) rotateX(90deg);
                transform: perspective(400px) rotateX(90deg);
                opacity: 0;
            }
            40% {
                -webkit-transform: perspective(400px) rotateX(-10deg);
                -ms-transform: perspective(400px) rotateX(-10deg);
                transform: perspective(400px) rotateX(-10deg);
            }
            70% {
                -webkit-transform: perspective(400px) rotateX(10deg);
                -ms-transform: perspective(400px) rotateX(10deg);
                transform: perspective(400px) rotateX(10deg);
            }
            100% {
                -webkit-transform: perspective(400px) rotateX(0);
                -ms-transform: perspective(400px) rotateX(0);
                transform: perspective(400px) rotateX(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes flipInY {
            0% {
                -webkit-transform: perspective(400px) rotateY(90deg);
                transform: perspective(400px) rotateY(90deg);
                opacity: 0;
            }
            40% {
                -webkit-transform: perspective(400px) rotateY(-10deg);
                transform: perspective(400px) rotateY(-10deg);
            }
            70% {
                -webkit-transform: perspective(400px) rotateY(10deg);
                transform: perspective(400px) rotateY(10deg);
            }
            100% {
                -webkit-transform: perspective(400px) rotateY(0);
                transform: perspective(400px) rotateY(0);
                opacity: 1;
            }
        }
        
        @keyframes flipInY {
            0% {
                -webkit-transform: perspective(400px) rotateY(90deg);
                -ms-transform: perspective(400px) rotateY(90deg);
                transform: perspective(400px) rotateY(90deg);
                opacity: 0;
            }
            40% {
                -webkit-transform: perspective(400px) rotateY(-10deg);
                -ms-transform: perspective(400px) rotateY(-10deg);
                transform: perspective(400px) rotateY(-10deg);
            }
            70% {
                -webkit-transform: perspective(400px) rotateY(10deg);
                -ms-transform: perspective(400px) rotateY(10deg);
                transform: perspective(400px) rotateY(10deg);
            }
            100% {
                -webkit-transform: perspective(400px) rotateY(0);
                -ms-transform: perspective(400px) rotateY(0);
                transform: perspective(400px) rotateY(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes lightSpeedIn {
            0% {
                -webkit-transform: translateX(100%) skewX(-30deg);
                transform: translateX(100%) skewX(-30deg);
                opacity: 0;
            }
            60% {
                -webkit-transform: translateX(-20%) skewX(30deg);
                transform: translateX(-20%) skewX(30deg);
                opacity: 1;
            }
            80% {
                -webkit-transform: translateX(0) skewX(-15deg);
                transform: translateX(0) skewX(-15deg);
                opacity: 1;
            }
            100% {
                -webkit-transform: translateX(0) skewX(0);
                transform: translateX(0) skewX(0);
                opacity: 1;
            }
        }
        
        @keyframes lightSpeedIn {
            0% {
                -webkit-transform: translateX(100%) skewX(-30deg);
                -ms-transform: translateX(100%) skewX(-30deg);
                transform: translateX(100%) skewX(-30deg);
                opacity: 0;
            }
            60% {
                -webkit-transform: translateX(-20%) skewX(30deg);
                -ms-transform: translateX(-20%) skewX(30deg);
                transform: translateX(-20%) skewX(30deg);
                opacity: 1;
            }
            80% {
                -webkit-transform: translateX(0) skewX(-15deg);
                -ms-transform: translateX(0) skewX(-15deg);
                transform: translateX(0) skewX(-15deg);
                opacity: 1;
            }
            100% {
                -webkit-transform: translateX(0) skewX(0);
                -ms-transform: translateX(0) skewX(0);
                transform: translateX(0) skewX(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes rotateIn {
            0% {
                -webkit-transform-origin: center center;
                transform-origin: center center;
                -webkit-transform: rotate(-200deg);
                transform: rotate(-200deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: center center;
                transform-origin: center center;
                -webkit-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @keyframes rotateIn {
            0% {
                -webkit-transform-origin: center center;
                -ms-transform-origin: center center;
                transform-origin: center center;
                -webkit-transform: rotate(-200deg);
                -ms-transform: rotate(-200deg);
                transform: rotate(-200deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: center center;
                -ms-transform-origin: center center;
                transform-origin: center center;
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes rotateInDownLeft {
            0% {
                -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @keyframes rotateInDownLeft {
            0% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                transform: rotate(-90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes rotateInDownRight {
            0% {
                -webkit-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @keyframes rotateInDownRight {
            0% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(90deg);
                -ms-transform: rotate(90deg);
                transform: rotate(90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes rotateInUpLeft {
            0% {
                -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(90deg);
                transform: rotate(90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @keyframes rotateInUpLeft {
            0% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(90deg);
                -ms-transform: rotate(90deg);
                transform: rotate(90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: left bottom;
                -ms-transform-origin: left bottom;
                transform-origin: left bottom;
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes rotateInUpRight {
            0% {
                -webkit-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(-90deg);
                transform: rotate(-90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @keyframes rotateInUpRight {
            0% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(-90deg);
                -ms-transform: rotate(-90deg);
                transform: rotate(-90deg);
                opacity: 0;
            }
            100% {
                -webkit-transform-origin: right bottom;
                -ms-transform-origin: right bottom;
                transform-origin: right bottom;
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
                opacity: 1;
            }
        }
        
        @-webkit-keyframes slideInUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(2000px);
                transform: translateY(2000px);
            }
            100% {
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes slideInUp {
            0% {
                opacity: 0;
                -webkit-transform: translateY(2000px);
                -ms-transform: translateY(2000px);
                transform: translateY(2000px);
            }
            100% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes slideInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-2000px);
                transform: translateY(-2000px);
            }
            100% {
                -webkit-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @keyframes slideInDown {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-2000px);
                -ms-transform: translateY(-2000px);
                transform: translateY(-2000px);
            }
            100% {
                -webkit-transform: translateY(0);
                -ms-transform: translateY(0);
                transform: translateY(0);
            }
        }
        
        @-webkit-keyframes slideInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes slideInLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-2000px);
                -ms-transform: translateX(-2000px);
                transform: translateX(-2000px);
            }
            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes slideInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                transform: translateX(2000px);
            }
            100% {
                -webkit-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @keyframes slideInRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(2000px);
                -ms-transform: translateX(2000px);
                transform: translateX(2000px);
            }
            100% {
                -webkit-transform: translateX(0);
                -ms-transform: translateX(0);
                transform: translateX(0);
            }
        }
        
        @-webkit-keyframes hinge {
            0% {
                -webkit-transform: rotate(0);
                transform: rotate(0);
                -webkit-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
            }
            20%,
            60% {
                -webkit-transform: rotate(80deg);
                transform: rotate(80deg);
                -webkit-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
            }
            40% {
                -webkit-transform: rotate(60deg);
                transform: rotate(60deg);
                -webkit-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
            }
            80% {
                -webkit-transform: rotate(60deg) translateY(0);
                transform: rotate(60deg) translateY(0);
                -webkit-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
                opacity: 1;
            }
            100% {
                -webkit-transform: translateY(700px);
                transform: translateY(700px);
                opacity: 0;
            }
        }
        
        @keyframes hinge {
            0% {
                -webkit-transform: rotate(0);
                -ms-transform: rotate(0);
                transform: rotate(0);
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
            }
            20%,
            60% {
                -webkit-transform: rotate(80deg);
                -ms-transform: rotate(80deg);
                transform: rotate(80deg);
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
            }
            40% {
                -webkit-transform: rotate(60deg);
                -ms-transform: rotate(60deg);
                transform: rotate(60deg);
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
            }
            80% {
                -webkit-transform: rotate(60deg) translateY(0);
                -ms-transform: rotate(60deg) translateY(0);
                transform: rotate(60deg) translateY(0);
                -webkit-transform-origin: top left;
                -ms-transform-origin: top left;
                transform-origin: top left;
                -webkit-animation-timing-function: ease-in-out;
                animation-timing-function: ease-in-out;
                opacity: 1;
            }
            100% {
                -webkit-transform: translateY(700px);
                -ms-transform: translateY(700px);
                transform: translateY(700px);
                opacity: 0;
            }
        }
        
        @-webkit-keyframes rollIn {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-100%) rotate(-120deg);
                transform: translateX(-100%) rotate(-120deg);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0) rotate(0);
                transform: translateX(0) rotate(0);
            }
        }
        
        @keyframes rollIn {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-100%) rotate(-120deg);
                -ms-transform: translateX(-100%) rotate(-120deg);
                transform: translateX(-100%) rotate(-120deg);
            }
            100% {
                opacity: 1;
                -webkit-transform: translateX(0) rotate(0);
                -ms-transform: translateX(0) rotate(0);
                transform: translateX(0) rotate(0);
            }
        }
    </style>
    <style id="ladipage.css" type="text/css">
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video,
        input,
        button,
        textarea,
        select {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 100%;
            font: inherit;
            vertical-align: baseline;
            box-sizing: border-box;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
        }
        
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
            display: block;
        }
        
        body {
            line-height: 1;
        }
        
        a {
            text-decoration: none;
        }
        
        ol,
        ul {
            list-style: none;
        }
        
        blockquote,
        q {
            quotes: none;
        }
        
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
            content: '';
            content: none;
        }
        
        table {
            border-collapse: collapse;
            border-spacing: 0;
        }
        
        body {
            font-size: 12px;
            -ms-text-size-adjust: none;
            -moz-text-size-adjust: none;
            -o-text-size-adjust: none;
            -webkit-text-size-adjust: none;
            background-color: #fff;
        }
        
        .overflow-hidden {
            overflow: hidden;
        }
        
        .ladi-transition {
            transition: all 150ms linear 0s;
        }
        
        .z-index-1 {
            z-index: 1;
        }
        
        .opacity-0 {
            opacity: 0;
        }
        
        .height-0 {
            height: 0 !important;
        }
        
        .pointer-events-none {
            pointer-events: none;
        }
        
        .transition-parent-collapse-height {
            transition: height 150ms linear 0s;
        }
        
        .transition-parent-collapse-top {
            transition: top 150ms linear 0s;
        }
        
        .transition-readmore {
            transition: height 350ms linear 0s;
        }
        
        .transition-collapse {
            transition: height 150ms linear 0s;
        }
        
        body.grab {
            cursor: grab;
        }
        
        .ladi-wraper {
            width: 100%;
            min-height: 100%;
            overflow: hidden;
        }
        
        .ladi-container {
            position: relative;
            margin: 0 auto;
            height: 100%;
        }
        
        .ladi-overlay {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            width: 100%;
            pointer-events: none;
        }
        
        .ladi-element {
            position: absolute;
        }
        
        .ladi-section {
            margin: 0 auto;
            position: relative;
        }
        
        .ladi-section[data-tab-id] {
            display: none;
        }
        
        .ladi-section.selected[data-tab-id] {
            display: block;
        }
        
        .ladi-section .ladi-section-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            overflow: hidden;
        }
        
        .ladi-section .ladi-section-arrow-down {
            position: absolute;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            cursor: pointer;
            z-index: 90000040;
            width: 33px;
            height: 33px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%205.58594L12.0002%2015.5859L22.0002%205.58594L23.4144%207.00015L12.0002%2018.4144L0.585938%207.00015L2.00015%205.58594Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-section .ladi-section-close {
            position: absolute;
            top: 0;
            right: 0;
            cursor: pointer;
            z-index: 90000040;
            width: 16px;
            height: 16px;
            margin: 10px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-menu {
            position: absolute;
        }
        
        .ladi-menu.list-menu-items.theme-1 {
            display: flex;
            width: fit-content;
            height: 100%;
            margin: 0 auto;
            left: 0;
            right: 0;
        }
        
        .ladi-menu.list-menu-items.theme-1 .ladi-menu-item {
            cursor: pointer;
            display: inline-flex;
            align-items: center;
            align-self: center;
        }
        
        .ladi-menu.menu-icon-item {
            width: 100%;
            height: 100%;
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            cursor: pointer;
        }
        
        .ladi-menu.menu-icon-item.theme-1.menu-icon-1 {
            -webkit-mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon1.svg?v=1.0);
            mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon1.svg?v=1.0);
        }
        
        .ladi-menu.menu-icon-item.theme-1.menu-icon-2 {
            -webkit-mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon2.svg?v=1.0);
            mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon2.svg?v=1.0);
        }
        
        .ladi-menu.menu-icon-item.theme-1.menu-icon-3 {
            -webkit-mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon3.svg?v=1.0);
            mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon3.svg?v=1.0);
        }
        
        .ladi-menu.menu-icon-item.theme-1.menu-icon-4 {
            -webkit-mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon4.svg?v=1.0);
            mask-image: url(https://w.ladicdn.com/v2/source/builder/svg/menu_icon4.svg?v=1.0);
        }
        
        .ladi-popup .ladi-menu.menu-icon-item {
            display: none;
        }
        
        .ladi-popup .ladi-menu.list-menu-items {
            display: flex;
            flex-flow: column;
        }
        
        #SECTION_POPUP>.ladi-container>.ladi-element[id^="POPUP_MENU_MOBILE"][data-dropbox="true"] {
            display: none;
        }
        
        .popup-menu-mobile {
            width: 100% !important;
            height: 100% !important;
            position: fixed !important;
            top: 0 !important;
            left: 0 !important;
            max-height: 100% !important;
        }
        
        .popup-menu-mobile .ladi-popup {
            min-height: 100%;
        }
        
        .popup-menu-mobile .ladi-popup,
        .popup-menu-mobile .ladi-popup-background {
            width: 100%;
            height: 100%;
        }
        
        .popup-menu-mobile .ladi-element .ladi-menu.menu-icon-item {
            display: none !important;
        }
        
        .popup-menu-mobile .ladi-element .ladi-menu.list-menu-items {
            display: flex !important;
        }
        
        .popup-menu-mobile .popup-close {
            position: absolute;
            width: 24px;
            height: 24px;
            top: 10px;
            right: 10px;
            cursor: pointer;
            background-color: #fff;
            -webkit-mask-size: 100% 100%;
            mask-size: 100% 100%;
            -webkit-mask-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
            mask-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23fff%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-survey {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
        }
        
        .ladi-form .ladi-survey {
            text-transform: inherit;
            text-decoration: inherit;
            letter-spacing: inherit;
            color: inherit;
        }
        
        .ladi-survey .ladi-survey-option {
            cursor: pointer;
            position: relative;
            display: inline-block;
            text-decoration-line: inherit;
            -webkit-text-decoration-line: inherit;
            transition: inherit;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-survey .ladi-survey-option-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            transition: inherit;
        }
        
        .ladi-survey .ladi-survey-option-label {
            display: block;
            text-decoration-line: inherit;
            -webkit-text-decoration-line: inherit;
            position: relative;
        }
        
        .ladi-survey .ladi-survey-option.selected .ladi-survey-option-label {
            color: inherit !important;
        }
        
        .ladi-survey .ladi-survey-option-image {
            background-size: cover;
            background-position: center center;
            pointer-events: none;
            vertical-align: middle;
            border-radius: inherit;
            position: relative;
            margin: 0 auto;
        }
        
        .ladi-survey .ladi-survey-button-next {
            display: block;
        }
        
        .ladi-survey .ladi-survey-button-next.empty {
            display: none;
        }
        
        .ladi-survey .ladi-survey-button-next.no-select {
            display: none;
        }
        
        .ladi-survey .ladi-survey-button-next button {
            background-color: #fff;
            border: 1px solid rgb(238, 238, 238);
            padding: 5px 10px;
            cursor: pointer;
            border-radius: 2px;
        }
        
        .ladi-survey .ladi-survey-button-next button:active {
            transform: translateY(2px);
            transition: transform 0.2s linear;
        }
        
        .ladi-carousel {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-carousel .ladi-carousel-content {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            top: 0;
            transition: top 350ms ease-in-out, left 350ms ease-in-out;
        }
        
        .ladi-carousel .ladi-carousel-arrow {
            position: absolute;
            top: calc(50% - (33px) / 2);
            cursor: pointer;
            z-index: 90000040;
            width: 33px;
            height: 33px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-carousel .ladi-carousel-arrow-left {
            left: 5px;
            transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
        }
        
        .ladi-carousel .ladi-carousel-arrow-right {
            right: 5px;
        }
        
        .ladi-carousel-indicators-circle {
            display: inline-flex;
            gap: 10px;
            position: absolute;
            bottom: -20px;
            left: 0;
            right: 0;
            margin: auto;
            width: fit-content;
        }
        
        .ladi-carousel-indicators-circle .item {
            width: 10px;
            height: 10px;
            background-color: #D6D6D6;
            border-radius: 100%;
            cursor: pointer;
            outline: 1px solid #fff;
        }
        
        .ladi-carousel-indicators-circle .item.selected,
        .ladi-carousel-indicators-circle .item:hover {
            background-color: #808080;
        }
        
        .ladi-carousel-indicators-number {
            display: inline-flex;
            gap: 10px;
            position: absolute;
            bottom: -20px;
            left: 0;
            right: 0;
            margin: auto;
            width: fit-content;
        }
        
        .ladi-carousel-indicators-number .item {
            width: 15px;
            height: 15px;
            background-color: #D6D6D6;
            border-radius: 100%;
            cursor: pointer;
            font-size: 10px;
            text-align: center;
            line-height: 15px;
            outline: 1px solid #fff;
        }
        
        .ladi-carousel-indicators-number .item.selected,
        .ladi-carousel-indicators-number .item:hover {
            background-color: #808080;
            color: #fff;
        }
        
        .ladi-gallery {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-gallery .ladi-gallery-view {
            position: absolute;
            overflow: hidden;
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            width: 100%;
            height: 100%;
            position: relative;
            display: none;
            transition: transform 500ms ease-in-out;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-perspective: 1000px;
            perspective: 1000px;
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.play-video {
            cursor: pointer;
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.play-video:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 60px;
            height: 60px;
            background: url(https://w.ladicdn.com/source/ladipage-play.svg?v=1.0) no-repeat center center;
            background-size: contain;
            pointer-events: none;
            cursor: pointer;
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.next,
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.selected.right {
            left: 0;
            transform: translate3d(100%, 0, 0);
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.prev,
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.selected.left {
            left: 0;
            transform: translate3d(-100%, 0, 0);
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.next.left,
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.prev.right,
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item.selected {
            left: 0;
            transform: translate3d(0, 0, 0);
        }
        
        .ladi-gallery .ladi-gallery-view>.selected,
        .ladi-gallery .ladi-gallery-view>.next,
        .ladi-gallery .ladi-gallery-view>.prev {
            display: block;
        }
        
        .ladi-gallery .ladi-gallery-view>.selected {
            left: 0;
        }
        
        .ladi-gallery .ladi-gallery-view>.next,
        .ladi-gallery .ladi-gallery-view>.prev {
            position: absolute;
            top: 0;
            width: 100%;
        }
        
        .ladi-gallery .ladi-gallery-view>.next {
            left: 100%;
        }
        
        .ladi-gallery .ladi-gallery-view>.prev {
            left: -100%;
        }
        
        .ladi-gallery .ladi-gallery-view>.next.left,
        .ladi-gallery .ladi-gallery-view>.prev.right {
            left: 0;
        }
        
        .ladi-gallery .ladi-gallery-view>.selected.left {
            left: -100%;
        }
        
        .ladi-gallery .ladi-gallery-view>.selected.right {
            left: 100%;
        }
        
        .ladi-gallery .ladi-gallery-control {
            position: absolute;
            overflow: hidden;
        }
        
        .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow {
            position: absolute;
            top: calc(50% - (33px) / 2);
            cursor: pointer;
            z-index: 90000040;
        }
        
        .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-left {
            left: 5px;
            transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
        }
        
        .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow-right {
            right: 5px;
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow {
            position: absolute;
            cursor: pointer;
            z-index: 90000040;
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box {
            position: relative;
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center center;
            float: left;
            position: relative;
            cursor: pointer;
            filter: invert(15%);
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item.play-video:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 30px;
            height: 30px;
            background: url(https://w.ladicdn.com/source/ladipage-play.svg?v=1.0) no-repeat center center;
            background-size: contain;
            pointer-events: none;
            cursor: pointer;
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item:hover {
            filter: none;
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item.selected {
            filter: none;
        }
        
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-box .ladi-gallery-control-item:last-child {
            margin-right: 0 !important;
            margin-bottom: 0 !important;
            ;
        }
        
        .ladi-gallery .ladi-gallery-view .ladi-gallery-view-arrow,
        .ladi-gallery .ladi-gallery-control .ladi-gallery-control-arrow {
            width: 33px;
            height: 33px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-gallery.ladi-gallery-top .ladi-gallery-view {
            width: 100%;
        }
        
        .ladi-gallery.ladi-gallery-top .ladi-gallery-control {
            top: 0;
            width: 100%;
        }
        
        .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow {
            top: calc(50% - (33px) / 2);
        }
        
        .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow-left {
            left: 0px;
            transform: rotateY(180deg) scale(0.6);
            -webkit-transform: rotateY(180deg) scale(0.6);
        }
        
        .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-arrow-right {
            right: 0px;
            transform: scale(0.6);
            -webkit-transform: scale(0.6);
        }
        
        .ladi-gallery.ladi-gallery-top .ladi-gallery-control .ladi-gallery-control-box {
            display: -webkit-inline-flex;
            display: inline-flex;
            left: 0;
            transition: left 150ms ease-in-out;
        }
        
        .ladi-gallery.ladi-gallery-bottom .ladi-gallery-view {
            top: 0;
            width: 100%;
        }
        
        .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control {
            width: 100%;
            bottom: 0;
        }
        
        .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow {
            top: calc(50% - (33px) / 2);
        }
        
        .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow-left {
            left: 0px;
            transform: rotateY(180deg) scale(0.6);
            -webkit-transform: rotateY(180deg) scale(0.6);
        }
        
        .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-arrow-right {
            right: 0px;
            transform: scale(0.6);
            -webkit-transform: scale(0.6);
        }
        
        .ladi-gallery.ladi-gallery-bottom .ladi-gallery-control .ladi-gallery-control-box {
            display: -webkit-inline-flex;
            display: inline-flex;
            left: 0;
            transition: left 150ms ease-in-out;
        }
        
        .ladi-gallery.ladi-gallery-left .ladi-gallery-view {
            height: 100%;
        }
        
        .ladi-gallery.ladi-gallery-left .ladi-gallery-control {
            height: 100%;
        }
        
        .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow {
            left: calc(50% - (33px) / 2);
        }
        
        .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow-left {
            top: 0px;
            transform: scale(0.6) rotate(270deg);
            -webkit-transform: scale(0.6) rotate(270deg);
        }
        
        .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-arrow-right {
            bottom: 0px;
            transform: scale(0.6) rotate(90deg);
            -webkit-transform: scale(0.6) rotate(90deg);
        }
        
        .ladi-gallery.ladi-gallery-left .ladi-gallery-control .ladi-gallery-control-box {
            display: inline-grid;
            top: 0;
            transition: top 150ms ease-in-out;
        }
        
        .ladi-gallery.ladi-gallery-right .ladi-gallery-view {
            height: 100%;
        }
        
        .ladi-gallery.ladi-gallery-right .ladi-gallery-control {
            height: 100%;
            right: 0;
        }
        
        .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow {
            left: calc(50% - (33px) / 2);
        }
        
        .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow-left {
            top: 0px;
            transform: scale(0.6) rotate(270deg);
            -webkit-transform: scale(0.6) rotate(270deg);
        }
        
        .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-arrow-right {
            bottom: 0px;
            transform: scale(0.6) rotate(90deg);
            -webkit-transform: scale(0.6) rotate(90deg);
        }
        
        .ladi-gallery.ladi-gallery-right .ladi-gallery-control .ladi-gallery-control-box {
            display: inline-grid;
            top: 0;
            transition: top 150ms ease-in-out;
        }
        
        .ladi-pagination {
            width: max-content;
            height: 100%;
            display: flex;
            align-items: center;
            padding: 0 20px;
            margin: 0 auto;
        }
        
        .ladi-search {
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-search input {
            width: 100%;
            height: 100%;
            padding: 10px;
            padding-right: 55px;
        }
        
        .ladi-search button {
            width: 55px;
            height: 100%;
            mask-size: 16px 16px;
            -webkit-mask-size: 16px 16px;
            mask-position: center center;
            -webkit-mask-position: center center;
            mask-repeat: no-repeat;
            -webkit-mask-repeat: no-repeat;
            mask-image: url(https://w.ladicdn.com/ladiui/icons/icon-search.svg);
            -webkit-mask-image: url(https://w.ladicdn.com/ladiui/icons/icon-search.svg);
            position: absolute;
            right: 0px;
        }
        
        .ladi-table {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: auto;
        }
        
        .ladi-table table {
            width: 100%;
        }
        
        .ladi-table table td {
            vertical-align: middle;
        }
        
        .ladi-table tbody td {
            word-break: break-word;
        }
        
        .ladi-table table td img {
            cursor: pointer;
            width: 100%;
        }
        
        .ladi-box {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-tabs {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-tabs .ladi-tabs-background {
            height: 100%;
            width: 100%;
            pointer-events: none;
        }
        
        .ladi-tabs>.ladi-element[data-index] {
            display: none;
        }
        
        .ladi-tabs>.ladi-element.selected[data-index] {
            display: block;
        }
        
        .ladi-frame {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-frame-bg .ladi-frame-background {
            height: 100%;
            width: 100%;
            pointer-events: none;
            transition: inherit;
        }
        
        .ladi-frame-bg:not(.ladi-frame) {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-banner {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-banner .ladi-banner-background {
            height: 100%;
            width: 100%;
            pointer-events: none;
        }
        
        #SECTION_POPUP .ladi-container {
            z-index: 90000070;
        }
        
        #SECTION_POPUP .ladi-container>.ladi-element {
            z-index: 90000070;
            position: fixed;
            display: none;
        }
        
        #SECTION_POPUP .ladi-container>.ladi-element[data-fixed-close="true"] {
            position: relative !important;
        }
        
        #SECTION_POPUP .ladi-container>.ladi-element.hide-visibility {
            display: block !important;
            visibility: hidden !important;
        }
        
        #SECTION_POPUP .popup-close {
            position: absolute;
            right: 0px;
            top: 0px;
            z-index: 9000000080;
            cursor: pointer;
            width: 16px;
            height: 16px;
            margin: 10px;
            background-repeat: no-repeat;
            background-position: center center;
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M23.4144%202.00015L2.00015%2023.4144L0.585938%2022.0002L22.0002%200.585938L23.4144%202.00015Z%22%3E%3C%2Fpath%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M2.00015%200.585938L23.4144%2022.0002L22.0002%2023.4144L0.585938%202.00015L2.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-popup {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-popup .ladi-popup-background {
            height: 100%;
            width: 100%;
            pointer-events: none;
        }
        
        .ladi-countdown {
            position: absolute;
            width: 100%;
            height: 100%;
            display: flex;
        }
        
        .ladi-countdown .ladi-countdown-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
            display: table;
            pointer-events: none;
        }
        
        .ladi-countdown .ladi-countdown-text {
            position: absolute;
            width: 100%;
            height: 100%;
            text-decoration: inherit;
            display: table;
            pointer-events: none;
        }
        
        .ladi-countdown .ladi-countdown-text span {
            display: table-cell;
            vertical-align: middle;
        }
        
        .ladi-countdown>.ladi-element {
            text-decoration: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
            position: relative;
            display: inline-block;
        }
        
        .ladi-countdown>.ladi-element:last-child {
            margin-right: 0px !important;
        }
        
        .ladi-button {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-button:active {
            transform: translateY(2px);
            transition: transform 0.2s linear;
        }
        
        .ladi-button .ladi-button-background {
            height: 100%;
            width: 100%;
            pointer-events: none;
            transition: inherit;
        }
        
        .ladi-button>.ladi-button-headline,
        .ladi-button>.ladi-button-shape {
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            display: table;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-button>.ladi-button-shape .ladi-shape {
            margin: auto;
            top: 0;
            bottom: 0;
        }
        
        .ladi-button>.ladi-button-headline .ladi-headline {
            display: table-cell;
            vertical-align: middle;
        }
        
        .ladi-button-group {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-button-group>.ladi-element {
            transition: inherit;
        }
        
        .ladi-button-group>.ladi-element>.ladi-button {
            transition: inherit;
        }
        
        .ladi-collection {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-collection.carousel {
            overflow: hidden;
        }
        
        .ladi-collection .ladi-collection-content {
            position: absolute;
            width: 100%;
            height: 100%;
            left: 0;
            transition: left 350ms ease-in-out;
        }
        
        .ladi-collection .ladi-collection-content .ladi-collection-item {
            display: block;
            position: relative;
            float: left;
            overflow: hidden;
        }
        
        .ladi-collection .ladi-collection-content .ladi-collection-item:before {
            content: '';
            position: absolute;
            pointer-events: none;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
        }
        
        .ladi-collection .ladi-collection-content .ladi-collection-page {
            float: left;
        }
        
        .ladi-collection .ladi-collection-arrow {
            position: absolute;
            top: calc(50% - (33px) / 2);
            cursor: pointer;
            z-index: 90000040;
        }
        
        .ladi-collection .ladi-collection-arrow-left {
            left: 5px;
            transform: rotateY(180deg);
            -webkit-transform: rotateY(180deg);
        }
        
        .ladi-collection .ladi-collection-arrow-right {
            right: 5px;
        }
        
        .ladi-collection .ladi-collection-button-next {
            position: absolute;
            bottom: -40px;
            right: 0;
            left: 0;
            margin: auto;
            cursor: pointer;
            z-index: 90000040;
            transform: rotate(90deg);
            -webkit-transform: rotate(90deg);
        }
        
        .ladi-collection .ladi-collection-arrow,
        .ladi-collection .ladi-collection-button-next {
            width: 33px;
            height: 33px;
            background-repeat: no-repeat;
            background-position: center center;
        }
        
        .ladi-collection .ladi-collection-arrow {
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-collection .ladi-collection-button-next {
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2224%22%20height%3D%2224%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23000%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M7.00015%200.585938L18.4144%2012.0002L7.00015%2023.4144L5.58594%2022.0002L15.5859%2012.0002L5.58594%202.00015L7.00015%200.585938Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
        }
        
        .ladi-form {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-form>.ladi-element {
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form .ladi-button>.ladi-button-headline {
            color: initial;
            font-size: initial;
            font-weight: initial;
            text-transform: initial;
            text-decoration: initial;
            font-style: initial;
            text-align: initial;
            letter-spacing: initial;
            line-height: initial;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container {
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form>[data-quantity="true"] .ladi-form-item-container {
            overflow: hidden;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item {
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item-background {
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select {
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-size: 9px 6px !important;
            background-position: right .5rem center;
            background-repeat: no-repeat;
            padding-right: 24px;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-2 {
            width: calc(100% / 2 - 5px);
            max-width: calc(100% / 2 - 5px);
            min-width: calc(100% / 2 - 5px);
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-2:nth-child(3) {
            margin-left: 7.5px;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-3 {
            width: calc(100% / 3 - 5px);
            max-width: calc(100% / 3 - 5px);
            min-width: calc(100% / 3 - 5px);
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-3:nth-child(3) {
            margin-left: 7.5px;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select-3:nth-child(4) {
            margin-left: 7.5px;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select option {
            color: initial;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control:not(.ladi-form-control-select) {
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select {
            text-transform: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select:not([data-selected=""]) {
            text-decoration: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item {
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
            vertical-align: middle;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-box-item {
            display: inline-block;
            width: fit-content;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item span {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item span[data-checked="true"] {
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-checkbox-item span[data-checked="false"] {
            text-transform: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-form .ladi-form-item-container {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-form .ladi-form-item-title-value {
            font-weight: bold;
            word-break: break-word;
        }
        
        .ladi-form .ladi-form-label-container {
            position: relative;
            width: 100%;
        }
        
        .ladi-form .ladi-form-control-file {
            background-repeat: no-repeat;
            background-position: calc(100% - 5px) center;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item {
            display: inline-block;
            cursor: pointer;
            position: relative;
            border-radius: 0px !important;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.image {
            background-size: cover;
            background-repeat: no-repeat;
            background-position: center;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.no-value {
            display: none !important;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.text.disabled {
            opacity: 0.35;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.image.disabled {
            opacity: 0.2;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.color.disabled {
            opacity: 0.15;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.selected:before {
            content: '';
            width: 0;
            height: 0;
            bottom: -1px;
            right: -1px;
            position: absolute;
            border-width: 0 0 15px 15px;
            border-color: transparent;
            border-style: solid;
        }
        
        .ladi-form .ladi-form-label-container .ladi-form-label-item.selected:after {
            content: '';
            background-image: url("data:image/svg+xml;utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' enable-background='new 0 0 12 12' viewBox='0 0 12 12' x='0' fill='%23fff' y='0'%3E%3Cg%3E%3Cpath d='m5.2 10.9c-.2 0-.5-.1-.7-.2l-4.2-3.7c-.4-.4-.5-1-.1-1.4s1-.5 1.4-.1l3.4 3 5.1-7c .3-.4 1-.5 1.4-.2s.5 1 .2 1.4l-5.7 7.9c-.2.2-.4.4-.7.4 0-.1 0-.1-.1-.1z'%3E%3C/path%3E%3C/g%3E%3C/svg%3E");
            background-repeat: no-repeat;
            background-position: bottom right;
            width: 7px;
            height: 7px;
            bottom: 0;
            right: 0;
            position: absolute;
        }
        
        .ladi-form .ladi-form-item {
            width: 100%;
            height: 100%;
            position: absolute;
        }
        
        .ladi-form .ladi-form-item-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
        
        .ladi-form .ladi-form-item.ladi-form-checkbox {
            height: auto;
        }
        
        .ladi-form .ladi-form-item .ladi-form-control {
            background-color: transparent;
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            padding: 0 5px;
            color: inherit;
            font-size: inherit;
            border: none;
        }
        
        .ladi-form .ladi-form-item.ladi-form-checkbox {
            padding: 0 5px;
        }
        
        .ladi-form .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-vertical .ladi-form-checkbox-item {
            margin-top: 0 !important;
            margin-left: 0 !important;
            margin-right: 0 !important;
            display: flex;
            align-items: center;
            border: none;
        }
        
        .ladi-form .ladi-form-item.ladi-form-checkbox.ladi-form-checkbox-horizontal .ladi-form-checkbox-item {
            margin-top: 0 !important;
            margin-left: 0 !important;
            margin-right: 10px !important;
            display: inline-flex;
            align-items: center;
            border: none;
            position: relative;
        }
        
        .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item input {
            margin-right: 5px;
            display: block;
        }
        
        .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item span {
            cursor: default;
            word-break: break-word;
        }
        
        .ladi-form .ladi-form-item textarea.ladi-form-control {
            resize: none;
            padding: 5px;
        }
        
        .ladi-form .ladi-button {
            cursor: pointer;
        }
        
        .ladi-form .ladi-button .ladi-headline {
            cursor: pointer;
            user-select: none;
        }
        
        .ladi-form .ladi-element .ladi-form-otp::-webkit-outer-spin-button,
        .ladi-form .ladi-element .ladi-form-otp::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        .ladi-form .ladi-element .ladi-form-item .button-get-code {
            display: none;
            position: absolute;
            right: 0;
            top: 0;
            bottom: 0;
            margin: auto 0;
            line-height: initial;
            padding: 5px 10px;
            height: max-content;
            cursor: pointer;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-form .ladi-element .ladi-form-item .button-get-code.hide-visibility {
            display: block !important;
            visibility: hidden !important;
        }
        
        .ladi-form .ladi-form-item.otp-resend .button-get-code {
            display: block;
        }
        
        .ladi-form .ladi-form-item.otp-countdown:before {
            content: attr(data-countdown-time) "s";
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto 0;
            height: max-content;
            line-height: initial;
        }
        
        .ladi-form [data-variant="true"] select option[disabled] {
            background: #fff;
            color: #b8b8b8 !important;
        }
        
        .ladi-google-recaptcha-checkbox {
            position: absolute;
            display: inline-block;
            transform: translateY(-100%);
            margin-top: -5px;
            z-index: 90000010;
        }
        
        .ladi-form-quantity {
            display: -webkit-inline-flex;
            display: inline-flex;
            border-color: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item.ladi-form-quantity .ladi-form-control {
            text-align: center;
            pointer-events: none;
            -moz-appearance: textfield;
            width: calc(100% - 45px);
            padding: 0;
            min-width: 24px;
            border-left: none;
            border-right: none;
            border-top: 1px hidden;
            border-bottom: 1px hidden;
            border-color: inherit;
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item.ladi-form-quantity input::-webkit-outer-spin-button,
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item.ladi-form-quantity input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        .ladi-form-quantity .button {
            display: table;
            cursor: pointer;
            text-align: center;
            width: 30px;
            height: 100%;
            position: relative;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-form-quantity .button span {
            font-size: 18px;
            position: relative;
            display: table-cell;
            vertical-align: middle;
        }
        
        .ladi-form-quantity .button:first-child span {
            top: -0.5px;
        }
        
        .ladi-form-quantity input {
            pointer-events: none;
        }
        
        .ladi-form .ladi-form-control-file {
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2230px%22%20height%3D%2230px%22%20viewBox%3D%220%200%2024%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20stroke-linecap%3D%22square%22%20stroke-linejoin%3D%22miter%22%20fill%3D%22none%22%20stroke%3D%22rgba(61%2C%2061%2C%2061%2C%201.0)%22%3E%3Cpath%20d%3D%22M6.5%2C18%20C4.01471863%2C18%202%2C15.9852814%202%2C13.5%20C2%2C11.0147186%204.01471863%2C9%206.5%2C9%20C6.9194849%2C9%207.3255638%2C9.05739789%207.71081142%2C9.16476838%20C8.72277%2C7.28089089%2010.711801%2C6%2013%2C6%20C15.9817502%2C6%2018.4554927%2C8.17503894%2018.9211951%2C11.0250841%20C20.6555928%2C11.2331085%2022%2C12.7095527%2022%2C14.5%20C22%2C16.4329966%2020.4329966%2C18%2018.5%2C18%20L6.5%2C18%20Z%22%3E%3C%2Fpath%3E%3Cpath%20d%3D%22M12%2C11%20L12%2C15%22%3E%3C%2Fpath%3E%3Cpolyline%20points%3D%2210%2012%2012%2010%2014%2012%2014%2012%22%3E%3C%2Fpolyline%3E%3C%2Fsvg%3E");
        }
        
        .ladi-form>.ladi-element .ladi-form-item-container .ladi-form-item .ladi-form-control-select {
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2232%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpolygon%20points%3D%220%2C0%2032%2C0%2016%2C24%22%20style%3D%22fill%3A%20rgb(0%2C%200%2C%200)%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E");
        }
        
        .ladi-combobox {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-combobox .ladi-combobox-item-container {
            position: absolute;
            width: 100%;
            height: 100%;
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
            background-size: inherit;
            background-attachment: inherit;
            background-origin: inherit;
        }
        
        .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item {
            width: 100%;
            height: 100%;
            position: absolute;
            text-transform: inherit;
            text-decoration: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
        }
        
        .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control option {
            color: initial;
        }
        
        .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control {
            background-color: transparent;
            min-width: 100%;
            min-height: 100%;
            max-width: 100%;
            max-height: 100%;
            width: 100%;
            height: 100%;
            padding: 0 5px;
            font-size: inherit;
            border: none;
            text-transform: inherit;
            text-align: inherit;
            letter-spacing: inherit;
            color: inherit;
            background-attachment: inherit;
            background-origin: inherit;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            background-size: 9px 6px !important;
            background-position: right .5rem center;
            background-repeat: no-repeat;
            padding-right: 24px;
        }
        
        .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control:not([data-selected=""]) {
            text-decoration: inherit;
        }
        
        .ladi-combobox .ladi-combobox-item-container .ladi-combobox-item .ladi-combobox-control {
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20width%3D%2232%22%20height%3D%2224%22%20viewBox%3D%220%200%2032%2024%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpolygon%20points%3D%220%2C0%2032%2C0%2016%2C24%22%20style%3D%22fill%3A%20rgb(0%2C%200%2C%200)%22%3E%3C%2Fpolygon%3E%3C%2Fsvg%3E");
        }
        
        .ladi-cart {
            position: absolute;
            width: 100%;
            font-size: 12px;
        }
        
        .ladi-cart .ladi-cart-row {
            position: relative;
            display: inline-table;
            width: 100%;
        }
        
        .ladi-cart .ladi-cart-row:after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            height: 1px;
            width: 100%;
            background: #dcdcdc;
        }
        
        .ladi-cart .ladi-cart-no-product {
            text-align: center;
            font-size: 16px;
            vertical-align: middle;
        }
        
        .ladi-cart .ladi-cart-image {
            width: 16%;
            vertical-align: middle;
            position: relative;
            text-align: center;
        }
        
        .ladi-cart .ladi-cart-image img {
            max-width: 100%;
        }
        
        .ladi-cart .ladi-cart-title {
            vertical-align: middle;
            padding: 0 5px;
            word-break: break-all;
        }
        
        .ladi-cart .ladi-cart-title .ladi-cart-title-name {
            display: block;
            margin-bottom: 5px;
            word-break: break-word;
        }
        
        .ladi-cart .ladi-cart-title .ladi-cart-title-variant {
            font-weight: bold;
            display: block;
            word-break: break-word;
        }
        
        .ladi-cart .ladi-cart-image .ladi-cart-image-quantity {
            position: absolute;
            top: -3px;
            right: -5px;
            background: rgba(150, 149, 149, 0.9);
            width: 20px;
            height: 20px;
            border-radius: 50%;
            text-align: center;
            color: #fff;
            line-height: 20px;
        }
        
        .ladi-cart .ladi-cart-quantity {
            width: 70px;
            vertical-align: middle;
            text-align: center;
        }
        
        .ladi-cart .ladi-cart-quantity-content {
            display: -webkit-inline-flex;
            display: inline-flex;
        }
        
        .ladi-cart .ladi-cart-quantity input {
            width: 24px;
            text-align: center;
            height: 22px;
            pointer-events: none;
            -moz-appearance: textfield;
            border-left: none;
            border-right: none;
            border-top: 1px solid #dcdcdc;
            border-bottom: 1px solid #dcdcdc;
            border-radius: 0;
        }
        
        .ladi-cart .ladi-cart-quantity input::-webkit-outer-spin-button,
        .ladi-cart .ladi-cart-quantity input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        
        .ladi-cart .ladi-cart-quantity .button {
            border: 1px solid #dcdcdc;
            cursor: pointer;
            text-align: center;
            width: 21px;
            height: 22px;
            position: relative;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-cart .ladi-cart-quantity .button:active {
            transform: translateY(2px);
            transition: transform 0.2s linear;
        }
        
        .ladi-cart .ladi-cart-quantity .button span {
            font-size: 18px;
            position: relative;
            left: 0.5px;
        }
        
        .ladi-cart .ladi-cart-quantity .button:first-child span {
            top: -1.2px;
        }
        
        .ladi-cart .ladi-cart-price {
            width: 100px;
            vertical-align: middle;
            text-align: right;
            padding: 0 10px 0 5px;
        }
        
        .ladi-cart .ladi-cart-row.has-promotion .ladi-cart-price span {
            text-decoration: line-through;
            display: block;
            margin-bottom: 3px;
        }
        
        .ladi-cart .ladi-cart-row.has-promotion .ladi-cart-price span.price-compare {
            text-decoration: none;
            color: #e85d04;
            font-weight: bold;
            margin-bottom: 0;
        }
        
        .ladi-cart .ladi-cart-row.has-promotion .ladi-cart-title span.promotion-name {
            margin-top: 5px;
            display: block;
            word-break: break-word;
        }
        
        .ladi-cart .ladi-cart-action {
            width: 28px;
            vertical-align: middle;
            text-align: center;
        }
        
        .ladi-cart .ladi-cart-action .button {
            border: 1px solid #dcdcdc;
            display: table;
            cursor: pointer;
            text-align: center;
            width: 25px;
            height: 22px;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-cart .ladi-cart-action .button:active {
            transform: translateY(2px);
            transition: transform 0.2s linear;
        }
        
        .ladi-cart .ladi-cart-action .button span {
            font-size: 13px;
            position: relative;
            top: 0.5px;
            display: table-cell;
            vertical-align: middle;
        }
        
        .ladi-video {
            position: absolute;
            width: 100%;
            height: 100%;
            cursor: pointer;
            overflow: hidden;
        }
        
        .ladi-video .ladi-video-background {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
        
        .button-unmute {
            cursor: pointer;
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
        }
        
        .button-unmute div {
            background-image: url("data:image/svg+xml;utf8, %3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2036%2036%22%20width%3D%22100%25%22%20height%3D%22100%25%22%20fill%3D%22%23fff%22%3E%3Cpath%20d%3D%22m%2021.48%2C17.98%20c%200%2C-1.77%20-1.02%2C-3.29%20-2.5%2C-4.03%20v%202.21%20l%202.45%2C2.45%20c%20.03%2C-0.2%20.05%2C-0.41%20.05%2C-0.63%20z%20m%202.5%2C0%20c%200%2C.94%20-0.2%2C1.82%20-0.54%2C2.64%20l%201.51%2C1.51%20c%20.66%2C-1.24%201.03%2C-2.65%201.03%2C-4.15%200%2C-4.28%20-2.99%2C-7.86%20-7%2C-8.76%20v%202.05%20c%202.89%2C.86%205%2C3.54%205%2C6.71%20z%20M%209.25%2C8.98%20l%20-1.27%2C1.26%204.72%2C4.73%20H%207.98%20v%206%20H%2011.98%20l%205%2C5%20v%20-6.73%20l%204.25%2C4.25%20c%20-0.67%2C.52%20-1.42%2C.93%20-2.25%2C1.18%20v%202.06%20c%201.38%2C-0.31%202.63%2C-0.95%203.69%2C-1.81%20l%202.04%2C2.05%201.27%2C-1.27%20-9%2C-9%20-7.72%2C-7.72%20z%20m%207.72%2C.99%20-2.09%2C2.08%202.09%2C2.09%20V%209.98%20z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
            width: 60px;
            height: 60px;
            position: absolute;
            top: 0;
            left: 0;
            bottom: 0;
            right: 0;
            margin: auto;
            background-color: rgba(0, 0, 0, 0.5);
            border-radius: 100%;
            background-size: 90%;
            background-repeat: no-repeat;
            background-position: center center;
        }
        
        .ladi-group {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-accordion {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-accordion .ladi-accordion-shape {
            width: 100% !important;
            height: 100% !important;
            top: 0 !important;
            left: 0 !important;
            display: table;
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
        }
        
        .ladi-shape {
            position: absolute;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .ladi-cart-number {
            position: absolute;
            top: -2px;
            right: -7px;
            background: #f36e36;
            text-align: center;
            width: 18px;
            height: 18px;
            line-height: 18px;
            font-size: 12px;
            font-weight: bold;
            color: #fff;
            border-radius: 100%;
        }
        
        .ladi-html-code {
            position: absolute;
            width: 100%;
            height: 100%;
        }
        
        .ladi-image {
            position: absolute;
            width: 100%;
            height: 100%;
            overflow: hidden;
        }
        
        .ladi-image .ladi-image-background {
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
            background-attachment: scroll;
            background-origin: content-box;
            position: absolute;
            margin: 0 auto;
            width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .ladi-image .ladi-image-compare {
            background-repeat: no-repeat;
            background-position: left top;
            background-size: cover;
            background-attachment: scroll;
            background-origin: content-box;
            position: absolute;
            margin: 0 auto;
            width: 50%;
            max-width: 100%;
            height: 100%;
            pointer-events: none;
        }
        
        .ladi-image .ladi-image-compare-line {
            width: 40px;
            height: 40px;
            border-radius: 100%;
            border: 3px solid #fff;
            position: absolute;
            top: 0;
            left: calc(50% - 40px / 2 - 3px / 2);
            bottom: 0;
            margin: auto;
            cursor: pointer;
        }
        
        .ladi-image .ladi-image-compare-line:before,
        .ladi-image .ladi-image-compare-line:after {
            content: '';
            width: 3px;
            height: 1000000px;
            background: #fff;
            position: absolute;
            left: 0;
            right: 0;
            margin: auto;
        }
        
        .ladi-image .ladi-image-compare-line:before {
            top: 35.5px;
        }
        
        .ladi-image .ladi-image-compare-line:after {
            bottom: 35.5px;
        }
        
        .ladi-image .ladi-image-compare-left-arrow,
        .ladi-image .ladi-image-compare-right-arrow {
            position: absolute;
            width: 0px;
            height: 0px;
            border: 6px inset transparent;
            top: 50%;
            margin-top: -6px;
        }
        
        .ladi-image .ladi-image-compare-left-arrow {
            left: 50%;
            margin-left: -17px;
            border-right: 6px solid #fff;
        }
        
        .ladi-image .ladi-image-compare-right-arrow {
            right: 50%;
            margin-right: -17px;
            border-left: 6px solid #fff;
        }
        
        .ladi-headline {
            width: 100%;
            display: inline-block;
            word-break: break-word;
            background-size: cover;
            background-position: center center;
        }
        
        .ladi-headline a {
            text-decoration: underline;
        }
        
        .ladi-paragraph {
            width: 100%;
            display: inline-block;
            word-break: break-word;
        }
        
        .ladi-paragraph a {
            text-decoration: underline;
        }
        
        .ladi-list-paragraph {
            width: 100%;
            display: inline-block;
        }
        
        .ladi-list-paragraph a {
            text-decoration: underline;
        }
        
        .ladi-list-paragraph ul li {
            position: relative;
            counter-increment: linum;
        }
        
        .ladi-list-paragraph ul li:before {
            position: absolute;
            background-repeat: no-repeat;
            background-size: 100% 100%;
            left: 0;
        }
        
        .ladi-list-paragraph ul li:last-child {
            padding-bottom: 0 !important;
        }
        
        .ladi-line {
            position: relative;
        }
        
        .ladi-line .ladi-line-container {
            border-bottom: 0 !important;
            border-right: 0 !important;
            width: 100%;
            height: 100%;
        }
        
        .ladi-notify-transition {
            transition: top 500ms ease-in-out, bottom 500ms ease-in-out, opacity 500ms ease-in-out;
        }
        
        .ladi-notify {
            padding: 5px;
            box-shadow: 0 0 1px rgba(64, 64, 64, .3), 0 8px 50px rgba(64, 64, 64, .05);
            border-radius: 40px;
            line-height: 1.6;
            width: 100%;
            height: 100%;
            font-size: 13px;
        }
        
        .ladi-notify .ladi-notify-image img {
            float: left;
            margin-right: 13px;
            border-radius: 50%;
            width: 53px;
            height: 53px;
            pointer-events: none;
        }
        
        .ladi-notify .ladi-notify-title {
            font-size: 100%;
            height: 17px;
            overflow: hidden;
            font-weight: 700;
            overflow-wrap: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 1;
        }
        
        .ladi-notify .ladi-notify-content {
            font-size: 92.308%;
            height: 17px;
            overflow: hidden;
            overflow-wrap: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            line-height: 1;
            padding-top: 2px;
        }
        
        .ladi-notify .ladi-notify-time {
            line-height: 1.6;
            font-size: 84.615%;
            display: inline-block;
            overflow-wrap: break-word;
            text-overflow: ellipsis;
            white-space: nowrap;
            max-width: calc(100% - 155px);
            overflow: hidden;
        }
        
        .ladi-notify .ladi-notify-copyright {
            font-size: 76.9231%;
            margin-left: 2px;
            position: relative;
            padding: 0 5px;
            cursor: pointer;
            opacity: 0.6;
            display: inline-block;
            top: -4px;
        }
        
        .ladi-notify .ladi-notify-copyright svg {
            vertical-align: middle;
        }
        
        .ladi-notify .ladi-notify-copyright svg:not(:root) {
            overflow: hidden;
        }
        
        .ladi-notify .ladi-notify-copyright div {
            text-decoration: none;
            color: rgba(64, 64, 64, 1);
            display: inline;
        }
        
        .ladi-notify .ladi-notify-copyright strong {
            font-weight: 700;
        }
        
        .ladi-spin-lucky {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            box-shadow: 0px 0px 7px 0px rgba(64, 64, 64, 0.6), 0 8px 50px rgba(64, 64, 64, 0.3);
            background-repeat: no-repeat;
            background-size: cover;
        }
        
        .ladi-spin-lucky .ladi-spin-lucky-start {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            margin: auto;
            width: 20%;
            height: 20%;
            cursor: pointer;
            background-size: contain;
            background-position: center center;
            background-repeat: no-repeat;
            transition: transform 300ms ease-in-out;
            -webkit-transition: transform 300ms ease-in-out;
        }
        
        .ladi-spin-lucky .ladi-spin-lucky-start:hover {
            transform: scale(1.1);
        }
        
        .ladi-spin-lucky .ladi-spin-lucky-screen {
            width: 100%;
            height: 100%;
            border-radius: 100%;
            transition: transform 7000ms cubic-bezier(0.25, 0.1, 0, 1);
            -webkit-transition: transform 7000ms cubic-bezier(0.25, 0.1, 0, 1);
            text-decoration-line: inherit;
            -webkit-text-decoration-line: inherit;
            text-transform: inherit;
        }
        
        .ladi-spin-lucky .ladi-spin-lucky-screen:before {
            background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            pointer-events: none;
        }
        
        .ladi-spin-lucky .ladi-spin-lucky-label {
            position: absolute;
            top: 50%;
            left: 50%;
            overflow: hidden;
            width: 42%;
            padding-left: 12%;
            transform-origin: 0 0;
            -webkit-transform-origin: 0 0;
            text-decoration-line: inherit;
            -webkit-text-decoration-line: inherit;
            text-transform: inherit;
            line-height: 1.6;
            text-shadow: rgba(0, 0, 0, 0.5) 1px 0px 2px;
        }
        
        a[data-action] {
            user-select: none;
            -webkit-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            cursor: pointer
        }
        
        a:visited {
            color: inherit
        }
        
        a:link {
            color: inherit
        }
        
        [data-opacity="0"] {
            opacity: 0
        }
        
        [data-hidden="true"] {
            display: none
        }
        
        [data-action="true"] {
            cursor: pointer
        }
        
        .ladi-hidden {
            display: none
        }
        
        .ladi-animation-hidden {
            visibility: hidden !important;
            opacity: 0 !important
        }
        
        .element-click-selected {
            cursor: pointer
        }
        
        .is-2nd-click {
            cursor: pointer
        }
        
        .ladi-button-shape.is-2nd-click,
        .ladi-accordion-shape.is-2nd-click {
            z-index: 1
        }
        
        .backdrop-popup {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 90000060
        }
        
        .backdrop-dropbox {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 90000040
        }
        
        .ladi-lazyload {
            background-image: none !important;
        }
        
        .ladi-list-paragraph ul li.ladi-lazyload:before {
            background-image: none !important;
        }
        
        .ladi-story-page-progress-bar {
            width: 100%;
            height: 25px;
            position: fixed;
            top: 0;
            left: 0;
        }
        
        .ladi-story-page-progress-bar-item {
            height: 100%;
            width: 100%;
            display: block;
            float: left;
            margin: 0 5px;
            position: relative;
            cursor: pointer;
        }
        
        .ladi-story-page-progress-bar-item:before {
            content: '';
            position: absolute;
            background: rgba(255, 255, 255, 0.4);
            border-radius: 10px;
            width: 100%;
            height: 4px;
            margin: auto;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
        }
        
        .ladi-story-page-progress-bar-item.active:before {
            background: #fff;
        }
        
        .ladi-story-page-progress-bar-item span {
            background: #fff;
            border-radius: 10px;
            height: 4px;
            display: block;
            margin: auto 0;
            top: 0;
            bottom: 0;
            position: absolute;
            transition: width 300ms linear;
            width: 0%;
        }
        
        #BODY_BACKGROUND {
            position: fixed;
            pointer-events: none;
            top: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            height: 100vh !important;
        }
        
        .ladi-html strong {
            font-weight: bold;
        }
        
        .ladi-html em {
            font-style: italic;
        }
        
        .ladi-html a {
            text-decoration: underline;
        }
        
        .ladi-html img {
            max-width: 100%;
        }
        
        .ladi-html .ladi-headline p,
        .ladi-html .ladi-paragraph p {
            margin: revert;
        }
        
        .ladi-carousel-fullwidth {
            width: 100vw !important;
            left: calc(-50vw + 50%) !important;
            box-sizing: border-box !important;
            transform: none !important;
        }
        
        .ladi-gallery-fullwidth {
            width: 100vw !important;
            left: calc(-50vw + 50%) !important;
            box-sizing: border-box !important;
            transform: none !important;
        }
        
        .ladi-gallery-fullwidth .ladi-gallery-view-item {
            transition-duration: 1500ms;
        }
        
        .ladi-menu.menu-icon-item.theme-1 {
            display: none;
        }
        
        .popup-menu-mobile {
            display: none;
        }
        
        .ladi-element.ladi-auto-scroll {
            overflow-x: auto;
            overflow-y: hidden;
            width: 100% !important;
            left: 0 !important;
            -webkit-overflow-scrolling: touch;
        }
        
        [data-hint]:not([data-timeout-id-copied]):before,
        [data-hint]:not([data-timeout-id-copied]):after {
            display: none !important;
        }
        
        .ladi-section.ladi-auto-scroll {
            overflow-x: auto;
            overflow-y: hidden;
            -webkit-overflow-scrolling: touch;
        }
        
        .ladi-carousel .ladi-carousel-content {
            transition: top 300ms ease-in-out, left 300ms ease-in-out;
        }
        
        .ladi-gallery .ladi-gallery-view>.ladi-gallery-view-item {
            transition: transform 300ms ease-in-out;
        }
        
        .ladi-html img {
            height: auto !important;
        }
        
        .ladi-menu.list-menu-items.theme-1 {
            display: none;
        }
        
        @media (hover: hover) {
            .ladi-check-hover {
                opacity: 0;
            }
        }
    </style>
    <script type="text/javascript" async="" id="5f9397fd82e7eb0c16650aa1_604ef3c8160b9d0012f17bb0" src="https://w.ladicdn.com/ladichat/sdk.js"></script>
    <script src="https://w.ladicdn.com/ldp-sdk/ladidata_sdk.js?v=1.0"></script>
    <script type="text/javascript" async="" src="https://builder.ladipage.com/js/ladipage.lang.vi.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://builder.ladipage.com/js/ladipage.lang.en.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://builder.ladipage.com/js/ladipage.lang.th.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://builder.ladipage.com/js/ladipage.lang.id.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://builder.ladipage.com/js/ladipage.lang.ms.min.js?v=1710410831294"></script>
    <script src="https://w.ladicdn.com/ldp-sdk/ladi_data.min.js?ver=1710425852757" async=""></script>
    <style id="style_menu_left_type_display_image" type="text/css">
        .builder-menu-addnew-element-image-img-item img {
            object-fit: scale-down !important;
        }
    </style>
    <style type="text/css">
        [data-setting="dynamic_form_data"] {
            display: none !important;
        }
        
        .builder-sync-3rd-form {
            display: none !important;
        }
        
        [input-option-form-item-standard][data-type="facebook_checkbox_plugin_transactional"] {
            display: none !important;
        }
        
        [input-option-form-item-standard][data-type="facebook_checkbox_plugin_promotional"] {
            display: none !important;
        }
    </style>
    <style type="text/css">
        .builder-setting-event-click-button {
            display: none !important;
        }
        
        #builder-content-tab-page-setting [data-type="website_password"] {
            display: none !important;
        }
    </style>
    <link id="builder_font_google" href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&amp;family=Roboto:wght@100;300;400;500;700;900&amp;family=Roboto+Slab:wght@400;700&amp;family=Roboto+Mono:wght@400;700&amp;family=Source+Sans+Pro:wght@400;700&amp;family=Montserrat:wght@400;700&amp;family=Quicksand:wght@400;700&amp;family=Tinos:wght@400;700&amp;family=Oswald:wght@400;700&amp;family=Muli:wght@400;700&amp;family=Mulish:wght@400;700&amp;family=Sriracha&amp;family=Philosopher:wght@400;700&amp;family=Niramit:wght@400;700&amp;family=Paytone+One&amp;family=Jura:wght@400;700&amp;family=Judson:wght@400;700&amp;family=Yeseva+One&amp;family=Baloo+Bhaina:wght@400;700&amp;family=Baloo+Bhaina+2:wght@400;700&amp;family=Taviraj:wght@400;700&amp;family=Prata&amp;family=Trirong:wght@400;700&amp;family=Lobster&amp;family=Itim&amp;family=Chonburi&amp;family=Arima:wght@400;700&amp;family=Bungee&amp;family=Bungee+Inline&amp;family=Bungee+Outline&amp;family=Bungee+Shade&amp;family=Cormorant+Upright:wght@400;700&amp;family=Athiti:wght@400;700&amp;family=Pattaya&amp;family=Merriweather:wght@400;700&amp;family=Hepta+Slab:wght@400;700&amp;family=Crimson+Pro:wght@400;700&amp;family=Playfair+Display:wght@400;700&amp;family=Noto+Serif:wght@400;700&amp;family=Dosis:wght@400;700&amp;family=Anton&amp;family=Josefin+Sans:wght@400;700&amp;family=Dancing+Script:wght@400;700&amp;family=Exo:wght@400;700&amp;family=EB+Garamond:wght@400;700&amp;family=Play:wght@400;700&amp;family=Maven+Pro:wght@400;700&amp;family=Barlow+Condensed:wght@400;700&amp;family=Alfa+Slab+One&amp;family=Rokkitt:wght@400;700&amp;family=Bahianita&amp;family=VT323&amp;family=Literata:wght@400;700&amp;family=K2D:wght@400;700&amp;family=Thasadith:wght@400;700&amp;family=Shantell+Sans:wght@400;700&amp;family=Raleway:wght@400;700&amp;display=swap"
        rel="stylesheet" type="text/css">
    <link id="builder_shape_material_icon" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" rel="stylesheet" type="text/css">
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.vn.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.us.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.th.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.id.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.my.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.ph.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.kh.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.la.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.hk.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.sg.min.js?v=1710410831294"></script>
    <script type="text/javascript" async="" src="https://w.ladicdn.com/v4/source/location.tw.min.js?v=1710410831294"></script>
    <style id="style_container" type="text/css">
        body {
            --width-container: 420px;
        }
        
        @media (max-width: 549px) {
            .builder-attribute-editor {
                right: initial !important;
                left: 294px;
            }
            body.stretch .builder-attribute-editor {
                right: 0px !important;
                left: initial !important;
            }
        }
        
        @media (max-width: 621px) {
            .builder-section-editor {
                margin-left: 49px;
            }
        }
        
        .builder-attribute-editor {
            width: 258px;
        }
        
        .builder-attribute-editor:not(.fixed) {
            left: initial !important;
            top: 56px !important;
        }
        
        .builder-attribute-editor.fixed {
            width: 257px;
            height: calc((100vh - 56px) * 80 / 100) !important;
        }
        
        .ladi-section {
            width: 420px;
            min-width: 420px;
        }
        
        .ladi-section .ladi-container {
            width: 420px;
        }
        
        .builder-container:before {
            left: calc((100% - 420px) / 2);
        }
        
        .builder-container:after {
            right: calc((100% - 420px) / 2);
        }
        
        .builder-section-editor {
            left: calc((100% - 420px) / 2 - 43px);
        }
        
        .builder-element-type-sticky {
            width: 420px;
        }
        
        .builder-attribute-editor .builder-attribute-group[data-group-item="setting_event_item"] .builder-attribute-detail {
            width: 252px;
        }
        
        .backdrop-popup {
            top: 56px;
        }
        
        #builder-rotate-doc {
            margin-top: -56px;
        }
        
        #builder-snap-grid {
            min-width: 546px;
        }
        
        #BODY_BACKGROUND {
            top: 56px;
            left: 0px;
            right: 4px;
            height: calc(100vh - 56px) !important;
        }
        
        @media (max-width: 549px) {
            #BODY_BACKGROUND {
                margin: 0 0 0 63px;
            }
        }
        
        .builder-container {
            direction: ltr;
        }
    </style>
    <style id="style_use_shopping" type="text/css">
        [ui-view="left-menu"] .builder-menu li[data-key="product"] {
            display: none;
        }
    </style>
    <style id="style_builder_screen" type="text/css">
        .builder-container #SECTION2 .ladi-container>.ladi-element:not(#HEADLINE4):not(#GROUP71):not(#IMAGE17):not(#BUTTON21):not(#PARAGRAPH22):not(#PARAGRAPH23):not(#IMAGE24):not(#LINE25):not(#LINE26):not(#LINE27):not(#PARAGRAPH28):not(#LINE29):not(#LINE30):not(#LINE31):not(#COUNTDOWN32):not(#FORM33):not(#IMAGE70) {
            display: none;
        }
        
        .builder-container #SECTION_POPUP .ladi-container>.ladi-element {
            display: none;
        }
        
        .builder-container #BODY_BACKGROUND .ladi-container>.ladi-element {
            display: none;
        }
        
        .builder-container .ladi-section:not(#SECTION2):not(#SECTION_POPUP):not(#BODY_BACKGROUND)>div {
            display: none;
        }
    </style>
    <style id="style_COUNTDOWN32" type="text/css">
        #COUNTDOWN32>.ladi-countdown>.ladi-element {
            height: 100%;
            width: calc((100% - 10px * 3) / 4);
            margin-right: 10px;
        }
    </style>
    <style id="style_FORM33" type="text/css">
        #FORM33 .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item span[data-checked="false"] {
            color: rgb(0, 0, 0);
        }
        
        #FORM33 .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item .ladi-editing {
            color: rgba(0, 0, 0, 1);
        }
        
        #FORM33 .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item .ladi-editing::placeholder {
            color: rgb(0, 0, 0);
        }
        
        #FORM33 .ladi-form .ladi-survey-option .ladi-survey-option-label {
            color: rgb(0, 0, 0);
        }
        
        #FORM33 .ladi-form-item .ladi-form-control::placeholder {
            color: rgb(0, 0, 0);
        }
        
        #FORM33 .ladi-form-item select.ladi-form-control[data-selected=""] {
            color: rgb(0, 0, 0);
        }
        
        #FORM33 .ladi-survey-option {
            text-align: left;
        }
        
        #FORM33 .ladi-form-item-container {
            border-style: solid;
            border-color: rgb(238, 238, 238);
            border-width: 1px;
        }
        
        #FORM33 .ladi-form-label-container .ladi-form-label-item {
            border-style: solid;
            border-color: rgb(238, 238, 238);
            border-width: 1px;
        }
        
        #FORM33 .ladi-form-item-container .ladi-form-item.ladi-form-quantity {
            width: calc(100% + 1px);
        }
        
        #FORM33 .ladi-form-item-container .ladi-form-quantity .button {
            background-color: rgb(238, 238, 238);
        }
        
        #FORM33 .ladi-form-item-background {
            background-color: rgb(255, 255, 255);
        }
    </style>
    <style id="style_POPUP45" type="text/css">
        @media (max-width: 549px) {
            #POPUP45 {
                margin-left: 85.5px !important;
            }
        }
    </style>
    <style id="style_SHAPE53" type="text/css">
        #SHAPE53 svg:last-child {
            fill: rgb(47, 161, 120);
        }
    </style>
    <style id="style_FORM46" type="text/css">
        #FORM46 .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item span[data-checked="false"] {
            color: rgb(0, 0, 0);
        }
        
        #FORM46 .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item .ladi-editing {
            color: rgba(0, 0, 0, 1);
        }
        
        #FORM46 .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item .ladi-editing::placeholder {
            color: rgb(0, 0, 0);
        }
        
        #FORM46 .ladi-form .ladi-survey-option .ladi-survey-option-label {
            color: rgb(0, 0, 0);
        }
        
        #FORM46 .ladi-form-item .ladi-form-control::placeholder {
            color: rgb(0, 0, 0);
        }
        
        #FORM46 .ladi-form-item select.ladi-form-control[data-selected=""] {
            color: rgb(0, 0, 0);
        }
        
        #FORM46 .ladi-survey-option {
            text-align: left;
        }
        
        #FORM46 .ladi-form-item-container {
            border-style: solid;
            border-color: rgb(47, 161, 120);
            border-width: 2px;
        }
        
        #FORM46 .ladi-form-label-container .ladi-form-label-item {
            border-style: solid;
            border-color: rgb(47, 161, 120);
            border-width: 2px;
        }
        
        #FORM46 .ladi-form-item-container .ladi-form-item.ladi-form-quantity {
            width: calc(100% + 2px);
        }
        
        #FORM46 .ladi-form-item-container .ladi-form-quantity .button {
            background-color: rgb(47, 161, 120);
        }
        
        #FORM46 .ladi-form-item-background {
            background-color: rgb(255, 255, 255);
        }
    </style>
    <style id="style_FORM_OTP_DEFAULT" type="text/css">
        #FORM_OTP_DEFAULT .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item span[data-checked="false"] {
            color: rgb(0, 0, 0);
        }
        
        #FORM_OTP_DEFAULT .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item .ladi-editing {
            color: #000;
        }
        
        #FORM_OTP_DEFAULT .ladi-form .ladi-form-item.ladi-form-checkbox .ladi-form-checkbox-item .ladi-editing::placeholder {
            color: rgb(0, 0, 0);
        }
        
        #FORM_OTP_DEFAULT .ladi-form .ladi-survey-option .ladi-survey-option-label {
            color: rgb(0, 0, 0);
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item .ladi-form-control::placeholder {
            color: rgb(0, 0, 0);
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item select.ladi-form-control[data-selected=""] {
            color: rgb(0, 0, 0);
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item {
            padding-left: 5px;
            padding-right: 5px;
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item.otp-countdown:before {
            right: 10px;
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item.ladi-form-checkbox {
            padding-left: 10px;
            padding-right: 10px;
        }
        
        #FORM_OTP_DEFAULT .ladi-survey-option {
            text-align: left;
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item-container {
            border-style: solid;
            border-color: rgb(241, 243, 244);
            border-width: 1px;
        }
        
        #FORM_OTP_DEFAULT .ladi-form-label-container .ladi-form-label-item {
            border-style: solid;
            border-color: rgb(241, 243, 244);
            border-width: 1px;
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item-container .ladi-form-item.ladi-form-quantity {
            width: calc(100% + 1px);
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item-container .ladi-form-quantity .button {
            background-color: rgb(241, 243, 244);
        }
        
        #FORM_OTP_DEFAULT .ladi-form-item-background {
            background-color: rgb(255, 255, 255);
        }
    </style>
    <style id="style_POPUP_OTP" type="text/css">
        @media (max-width: 549px) {
            #POPUP_OTP {
                margin-left: 113px !important;
            }
        }
    </style>
    <style id="style_livechat" type="text/css">
        #ladichat {
            display: none;
        }
    </style>
    <style id="font_element_default" type="text/css">
        #builder-container {
            font-family: "Open Sans", sans-serif
        }
        
        .font_element_default {
            font-family: "Open Sans", sans-serif
        }
    </style>
    <style id="style_font" type="text/css"></style>
</head>

<body class="ladi-font-default shortcut-all-element mobile" style=""><noscript>You need to enable JavaScript to run this website.</noscript>
    <script type="text/javascript">
        var LadiPageConfig = {
            is_production: true,
            minify: true,
            version: '1710410831294',
            i18n_data: {
                "en": {
                    "country": "US",
                    "currency": "USD",
                    "name": "English"
                },
                "vi": {
                    "country": "VN",
                    "currency": "VND",
                    "name": "Vietnamese"
                },
                "th": {
                    "country": "TH",
                    "currency": "THB",
                    "name": "Thai"
                },
                "id": {
                    "country": "ID",
                    "currency": "IDR",
                    "name": "Indonesian"
                },
                "ms": {
                    "country": "MY",
                    "currency": "MYR",
                    "name": "Malay"
                }
            }
        };
    </script>
    <script type="text/javascript">
        ! function() {
            document.body.style.setProperty("display", "none");
            var e = 0,
                i = 0,
                t = null,
                n = "";
            if ("undefined" != typeof Storage && void 0 != Storage) {
                var a = "CACHE_VERSION";
                n = 2 != (n = (n = localStorage.getItem(a) || n).split("|")).length || n[0] != LadiPageConfig.version ? "" : n[1], LadiPageConfig.is_production ? (0 == n.length && (n = LadiPageConfig.version, localStorage.removeItem(a)), n = "?v=" + encodeURIComponent(n)) : n.length > 0 ? n = "?v=" + encodeURIComponent(n) : localStorage.removeItem(a), t = function() {
                    if (!(e > ++i)) {
                        var t = document.createElement("span");
                        if (t.className = "opacity-0", t.style.setProperty("display", "none"), document.body.appendChild(t), document.body.style.removeProperty("display"), 0 != getComputedStyle(t).opacity) {
                            var n = document.createElement("div");
                            n.innerHTML = '<style type="text/css">:root {--main-primary: #1C00C2; --main-white: #FFFFFF;}</style>Click <a style="cursor: pointer; color: var(--main-primary); text-decoration: underline;">here</a> to update for LadiPage Builder latest version', n.setAttribute("style", "z-index: 900000070; position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: var(--main-white);"), document.body.appendChild(n), document.body.style.setProperty("overflow", "hidden"), n.getElementsByTagName("a")[0].addEventListener("click", function(e) {
                                e.stopPropagation(), localStorage.setItem(a, LadiPageConfig.version + "|" + Date.now()), window.location.reload()
                            })
                        }
                        t.parentElement.removeChild(t)
                    }
                }
            }
            LadiPageConfig.is_production || (n = "?v=" + LadiPageConfig.version), LadiPageConfig.cache_version = n;
            var s = function(i, a) {
                    if (void 0 != i) {
                        var s = document.createElement("link");
                        s.rel = "stylesheet", s.type = "text/css", a || (e++, s.addEventListener("load", t)), s.href = i + (a ? "" : n), document.head.appendChild(s)
                    }
                },
                o = function(i, a) {
                    if (void 0 != i) {
                        var s = document.createElement("script");
                        s.type = "text/javascript", a || (e++, s.addEventListener("load", t)), s.src = i + (a ? "" : n), document.body.appendChild(s)
                    }
                },
                d = "https://w.ladicdn.com/v4/source/builder",
                l = window.location.pathname.toLowerCase();
            if (0 == l.indexOf("/editor/") || 0 == l.indexOf("/history/")) {
                document.documentElement.setAttribute("ng-app", "LadiPageBuilder"), document.body.classList.add("ladi-font-default");
                var r = document.createElement("div");
                r.setAttribute("ui-view", ""), document.body.appendChild(r), LadiPageConfig.is_builder = !0, LadiPageConfig.link_builder_img = "https://w.ladicdn.com/v4/source/builder/img", LadiPageConfig.link_static_default = "https://builder.ladipage.com", LadiPageConfig.lang_path = "https://builder.ladipage.com/lang", LadiPageConfig.lang_prefix = "/builder.1710410831294.chunk", s("https://w.ladicdn.com/ladiui/ladiui.min.css"), s(d + "/css/builder.chunk.css"), o("https://w.ladicdn.com/ladiui/ladiui.min.js"), o(d + "/js/editor.sdk.min.js"), o(d + "/js/builder.chunk.js")
            } else {
                document.body.classList.add("mini-navbar");
                var c = document.createElement("div");
                c.id = "root", document.body.appendChild(c), LadiPageConfig.is_manager = !0, s("https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap", !0), s("https://w.ladicdn.com/ladiui/ladiui.min.css"), s(d + "/css/manager.chunk.css"), o("https://w.ladicdn.com/ladiui/ladiui.min.js"), o(d + "/js/editor.sdk.min.js"), o(d + "/js/manager.chunk.js")
            }
        }();
    </script>
    <!---->
    <div ui-view="">
        <!---->
        <!---->
        <div ng-if="builderTranslateLoaded" ng-show="!isBuilderModal" ui-view="">
            <!---->
            <div ui-view="top-menu">
                <div class="builder-menu-top website-builder" ng-style="getStyle()" style="height: 56px;">
                    <div class="editor ladiui website-builder-item left">
                        <a ng-click="clickDashboard($event)" target="_blank" class="ladiui website-builder-item left icon- mgr10 tooltip">
                            <img ng-src="https://w.ladicdn.com/ladiui/ladipage/ladipage-icon.svg" alt="" src="https://w.ladicdn.com/ladiui/ladipage/ladipage-icon.svg">
                            <span class="tooltiptext bottom" tooltiptext="Dashboard"></span>
                        </a>
                        <div class="ladiui builder-menu-top-line-"></div>
                        <div class="ladiui website-builder-item left list-page-menu-left select-option mgl10">
                            <div ng-click="clickButtonAdd($event)" ng-class="classButtonAdd()" class="ladiui btn-add-function tooltip">
                                <i class="builder-icon add-function"></i>
                                <span class="tooltiptext bottom" tooltiptext="Thêm"></span>
                            </div>

                            <!---->
                            <!---->

                            <div ng-click="clickButtonLayer($event)" class="builder-icon icon-select-menu website layer tooltip">
                                <span class="tooltiptext bottom" tooltiptext="Layer"></span>
                            </div>
                            <!---->
                            <div ng-if="!is_editor_banner" ng-click="clickShortcutSection($event)" class="builder-icon icon-select-menu website section tooltip">
                                <span class="tooltiptext bottom" tooltiptext="Section"></span>
                            </div>
                            <!---->
                            <!---->
                            <div ng-if="!is_editor_banner" ng-click="clickShortcutPopup($event)" class="builder-icon icon-select-menu website popup tooltip">
                                <span class="tooltiptext bottom" tooltiptext="Popup"></span>
                            </div>
                            <!---->
                            <!---->
                        </div>
                    </div>

                    <div class="ladiui website-builder-item center">
                        <!---->

                        <!---->

                        <!---->
                        <div ng-show="showAllDevice()" ng-if="!is_editor_banner" class="editor ladiui device-center">
                            <div ng-click="clickButtonDesktop($event)" ng-class="classDesktop()" class="builder-icon builder-menu-top-button-icon desktop tooltip">
                                <span class="tooltiptext bottom" tooltiptext="Desktop"></span>
                            </div>
                            <div ng-click="clickButtonMobile($event)" ng-class="classMobile()" class="builder-icon builder-menu-top-button-icon mobile tooltip active">
                                <span class="tooltiptext bottom" tooltiptext="Mobile"></span>
                            </div>
                            <div ng-show="showSortMobileAll()" ng-click="clickSortMobileAll($event)" class="builder-menu-top-sort-mobile tooltip">
                                <i class="builder-icon sort_mobile"></i>
                                <span class="tooltiptext bottom" tooltiptext="Tự động sắp xếp Mobile"></span>
                            </div>
                        </div>
                        <!---->

                        <div class="preview">
                            <!---->
                            <div ng-show="showAllDevice()" ng-if="!is_editor_banner" class="ladiui device-center">
                                <div ng-click="clickButtonDesktop($event)" ng-class="classDesktop()" class="builder-icon builder-menu-top-button-icon desktop tooltip">
                                    <span class="tooltiptext bottom" tooltiptext="Desktop"></span>
                                </div>
                                <div ng-click="clickButtonMobile($event)" ng-class="classMobile()" class="builder-icon builder-menu-top-button-icon mobile tooltip active">
                                    <span class="tooltiptext bottom" tooltiptext="Mobile"></span>
                                </div>
                                <div class="builder-menu-top-line"></div>
                            </div>
                            <!---->
                            <div class="display-inline-block">
                                <div ng-click="clickButtonZoomOut($event)" class="builder-icon builder-menu-top-button-icon zoom_out tooltip">
                                    <span class="tooltiptext bottom" tooltiptext="Thu nhỏ"></span>
                                </div>
                                <div class="builder-menu-top-button-text ladiui dropdown">
                                    <span class="ladiui dropdown-toggle basic" data-toggle="dropdown">100%</span>
                                    <ul class="ladiui dropdown-menu" style="width: 70px; min-width: initial;">
                                        <li ng-click="zoomPreview($event, 25)"><a class="ladiui dropdown-item">25%</a></li>
                                        <li ng-click="zoomPreview($event, 50)"><a class="ladiui dropdown-item">50%</a></li>
                                        <li ng-click="zoomPreview($event, 75)"><a class="ladiui dropdown-item">75%</a></li>
                                        <li ng-click="zoomPreview($event, 100)"><a class="ladiui dropdown-item">100%</a></li>
                                        <li ng-click="zoomPreview($event, 125)"><a class="ladiui dropdown-item">125%</a></li>
                                        <li ng-click="zoomPreview($event, 150)"><a class="ladiui dropdown-item">150%</a></li>
                                        <li ng-click="zoomPreview($event, 175)"><a class="ladiui dropdown-item">175%</a></li>
                                        <li ng-click="zoomPreview($event, 200)"><a class="ladiui dropdown-item">200%</a></li>
                                    </ul>
                                </div>
                                <div ng-click="clickButtonZoomIn($event)" class="builder-icon builder-menu-top-button-icon zoom_in tooltip">
                                    <span class="tooltiptext bottom" tooltiptext="Phóng to"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="editor ladiui website-builder-item right">
                        <div ng-click="clickButtonUndo($event)" class="builder-icon builder-menu-top-button-icon undo tooltip">
                            <span class="tooltiptext bottom" tooltiptext="Undo (Ctrl + Z)"></span>
                        </div>
                        <div ng-click="clickButtonRedo($event)" class="builder-icon builder-menu-top-button-icon redo tooltip">
                            <span class="tooltiptext bottom" tooltiptext="Redo (Ctrl + Shift + Z)"></span>
                        </div>

                        <div class="builder-menu-top-line"></div>

                        <div class="ladiui website-builder-item left select-option mgl10">
                            <!---->
                            <div ng-if="!is_editor_banner" ng-click="clickButtonHistory($event)" class="builder-icon icon-select-menu website history-website tooltip">
                                <span class="tooltiptext bottom" tooltiptext="Lịch sử chỉnh sửa"></span>
                            </div>
                            <!---->
                            <div class="ladiui dropdown website-custom-top-menu">
                                <div class="ladiui dropdown-toggle basic builder-icon icon-select-menu website help tooltip" data-toggle="dropdown">
                                    <span class="tooltiptext bottom" tooltiptext="Hỗ trợ"></span>
                                </div>
                                <ul class="ladiui dropdown-menu">
                                    <li ng-click="clickSupportLiveChat($event)"><a class="ladiui dropdown-item"><i class="builder-icon is-background support"></i><span>LiveChat với chúng tôi</span></a></li>
                                    <li ng-click="clickSupportDocument($event)"><a class="ladiui dropdown-item"><i class="builder-icon page"></i><span>Tài liệu hướng dẫn</span></a></li>
                                    <li ng-click="clickSupportShortcut($event)"><a class="ladiui dropdown-item"><i class="builder-icon shortcut"></i><span>Phím tắt</span></a>
                                    </li>
                                    <li ng-click="clickSupportCommunity($event)"><a class="ladiui dropdown-item"><i class="builder-icon facebook"></i><span>Cộng đồng LadiPage</span></a>
                                    </li>
                                    <li ng-click="clickSupportSendFeedback($event)"><a class="ladiui dropdown-item"><i class="builder-icon info"></i><span>Yêu cầu tính năng</span></a>
                                    </li>
                                    <li ng-show="showServiceDesignLandingPage()" ng-click="clickServiceDesignLandingPage($event)" class="ng-hide"><a class="ladiui dropdown-item"><i class="builder-icon design_page"></i><span>Dịch vụ thiết kế</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="ladiui dropdown website-custom-top-menu">
                                <div class="ladiui dropdown-toggle basic builder-icon icon-select-menu website tools tooltip" data-toggle="dropdown">
                                    <span class="tooltiptext bottom" tooltiptext="Công cụ"></span>
                                </div>
                                <ul class="ladiui dropdown-menu">
                                    <li ng-click="clickToggleGrid($event)">
                                        <a class="ladiui dropdown-item">
                                            <input id="input-toggle-grid" type="checkbox" class="ladiui checkbox form-check-input-checkbox pointer-events-none" name="checkbox">
                                            <span>Bật/Tắt Grid (Ctrl + ')</span></a>
                                    </li>
                                    <li ng-click="clickToggleSnap($event)">
                                        <a class="ladiui dropdown-item">
                                            <input id="input-toggle-snap" type="checkbox" class="ladiui checkbox form-check-input-checkbox pointer-events-none" name="checkbox">
                                            <span>Tự động bắt dính</span></a>
                                    </li>
                                    <li ng-click="clickToggleSwapElement($event)">
                                        <a class="ladiui dropdown-item">
                                            <input id="input-toggle-swap-element" type="checkbox" class="ladiui checkbox form-check-input-checkbox pointer-events-none" name="checkbox">
                                            <span>Hoán đổi phần tử</span></a>
                                    </li>
                                    <li ng-click="clickToggleShortcutAllElement($event)">
                                        <a class="ladiui dropdown-item">
                                            <input id="input-toggle-shortcut-all-element" type="checkbox" class="ladiui checkbox form-check-input-checkbox pointer-events-none" name="checkbox">
                                            <span>Công cụ thêm nhanh</span></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="ladiui dropdown website-custom-top-menu">
                                <div class="ladiui dropdown-toggle basic builder-icon icon-select-menu website setting_outline tooltip" data-toggle="dropdown">
                                    <span class="tooltiptext bottom" tooltiptext="Thiết lập"></span>
                                </div>
                                <ul class="ladiui dropdown-menu">
                                    <!---->
                                    <!---->
                                    <!---->
                                    <li ng-if="!is_editor_website &amp;&amp; !is_editor_banner &amp;&amp; !is_editor_popupx" ng-click="clickSettingSeo($event)"><a class="ladiui dropdown-item"><i class="builder-icon facebook"></i><span>SEO &amp; Social</span></a></li>
                                    <!---->
                                    <!---->
                                    <li ng-if="!is_editor_website &amp;&amp; !is_editor_banner &amp;&amp; !is_editor_popupx" ng-click="clickCodePageConversion($event)"><a class="ladiui dropdown-item"><i class="builder-icon html_code"></i><span>Mã chuyển đổi</span></a></li>
                                    <!---->
                                    <!---->
                                    <li ng-if="!is_editor_website &amp;&amp; !is_editor_banner" ng-click="clickCodePageCustom($event)"><a class="ladiui dropdown-item"><i class="builder-icon javascript_css"></i><span>Mã JavaScript/CSS</span></a></li>
                                    <!---->
                                    <!---->
                                    <li ng-if="!is_editor_website &amp;&amp; !is_editor_banner" ng-click="clickOptimizePage($event)"><a class="ladiui dropdown-item"><i class="builder-icon optimize_page"></i><span>Tối ưu hoá trang</span></a>
                                    </li>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <li ng-if="!is_editor_website &amp;&amp; !is_editor_banner &amp;&amp; !is_editor_popupx" ng-click="clickDynamicContent($event)"><a class="ladiui dropdown-item"><i class="builder-icon dynamic_content"></i><span>Dynamic Content</span></a></li>
                                    <!---->
                                    <!---->
                                    <li ng-if="!is_editor_website" ng-click="clickPageSettingDefault($event)"><a class="ladiui dropdown-item"><i class="builder-icon page"></i><span>Thiết lập toàn trang</span></a>
                                    </li>
                                    <!---->
                                </ul>
                            </div>
                        </div>

                        <div class="builder-menu-top-line"></div>

                        <div ng-click="clickButtonSave($event)" class="builder-menu-top-button-text tooltip">
                            <span>Lưu</span>
                            <span class="tooltiptext bottom" tooltiptext="Ctrl + S"></span>
                        </div>
                        <div ng-click="clickButtonPreview($event)" class="builder-menu-top-button-text tooltip">
                            <span>Xem trước</span>
                            <span class="tooltiptext bottom" tooltiptext="Ctrl + P"></span>
                        </div>

                        <div ng-click="clickButtonPublish($event)" class="builder-menu-top-button-text primary ladiui btn btn-primary tooltip">
                            <span ng-bind-html="user_setting.publish_button_text | convertHtml"><i style="width: 18px; height: 18px; display: inline-block; float: left; left: -5px; top: 1px;" class="builder-icon eye_show background-white"></i>Xem và xuất bản</span>
                            <span class="tooltiptext bottom" tooltiptext="Ctrl + Shift + P"></span>
                        </div>
                        <div ng-click="clickButtonAttribute($event)" class="builder-icon builder-menu-top-button-icon attribute tooltip">
                            <span class="tooltiptext left" tooltiptext="Thuộc tính"></span>
                        </div>
                    </div>

                    <div ng-show="isBuilder" class="preview ladiui website-builder-item right">
                        <div ng-click="clickClosePreview($event)" class="builder-menu-top-button-text">
                            <span>Thoát xem</span>
                        </div>
                        <div ng-click="clickButtonPublish($event)" class="builder-menu-top-button-text primary ladiui btn btn-primary tooltip">
                            <span ng-bind-html="user_setting.publish_button_text | convertHtml"><i style="width: 18px; height: 18px; display: inline-block; float: left; left: -5px; top: 1px;" class="builder-icon eye_show background-white"></i>Xem và xuất bản</span>
                            <span class="tooltiptext bottom" tooltiptext="Ctrl + Shift + P"></span>
                        </div>
                    </div>
                </div>

                <script type="text/javascript">
                    LadiUI.init();
                </script>
            </div>
            <!---->
            <div ui-view="left-menu">
                <div class="ladi-hidden builder-menu" ng-show="showMenu">
                    <ul>
                        <!---->
                        <li class="builder-menu-two-column" data-key="add_new" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-c-add"></i>
                                <span>Thêm</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-img"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Hình ảnh
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-shape-star"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Biểu tượng
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-gallery"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Gallery
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-pen-tool"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Pen Tool
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-button"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Nút bấm
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-video-player"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Video
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-button icon-button-group"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Nhóm nút bấm
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-form"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Form
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-text"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Tiêu đề
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-form"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Form Login
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-paragraph"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Đoạn văn
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-slider"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Carousel
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-list-bullet"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Danh sách
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-html"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Mã HTML
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-shape-line"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Đường kẻ
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-element-repeater"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Frame
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-shape-rectangle"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Hình hộp
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-grid-view icon-table"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Table
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-grid-view"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Collection List
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-page-setting"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Survey
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-tabs"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Tabs
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="product" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-cart-add"></i>
                                <span>Sản phẩm</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-grid-view"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Product List
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-cart-add"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Cart Button
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-cart"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Cart Icon
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-basket"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Checkout
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-combobox builder-pull-left"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="" class="builder-pull-right" style="width: calc(100% - 25px);">
    Phương thức vận chuyển
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-form builder-pull-left"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="" class="builder-pull-right" style="width: calc(100% - 25px);">
    Form nhập mã giảm giá
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="section" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-section"></i>
                                <span>Section</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child builder-menu-child-section">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-c-add"></i>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!----><strong ng-if="child.isBold">
    Thêm mới Section
</strong>
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="SECTION2" menu-item-child="" ng-repeat="child in item.childs" class="section-tabs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    SECTION2
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="popup" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-popup"></i>
                                <span>Popup</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child builder-menu-child-section">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-c-add"></i>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!----><strong ng-if="child.isBold">
    Thêm mới Popup
</strong>
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="POPUP45" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    POPUP45
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="dropbox" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-dock-top"></i>
                                <span>Dropbox</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child builder-menu-child-section">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-c-add"></i>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <!----><strong ng-if="child.isBold">
    Thêm mới Dropbox
</strong>
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="layer" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-layer"></i>
                                <span>Layer</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="list_layout_setting" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-layout-setting"></i>
                                <span>Layout</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="list_page_setting" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-page-setting"></i>
                                <span>Quản lý trang</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li class="builder-menu-two-column" data-key="app" ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-app-store"></i>
                                <span>Ứng dụng</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="countdown" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/countdown.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/countdown.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_notify" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/notify.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/notify.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_notify
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_spinlucky" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/spinlucky.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/spinlucky.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_spinlucky
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_review" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/review.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/review.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_review
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_ladichat" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/ladichat.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/ladichat.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_ladichat
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="LADIFLOW" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="ladi-hidden"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    LADIFLOW
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_popupx" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/popupx.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/popupx.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_popupx
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_recaptcha" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_recaptcha
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_recaptcha" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_checkbox.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_checkbox.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_recaptcha
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_recaptcha_enterprise" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_enterprise.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_enterprise.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_recaptcha_enterprise
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_google_places_autocomplete" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/ladiui/icons/apps/google-maps-platform.svg" src="https://w.ladicdn.com/ladiui/icons/apps/google-maps-platform.svg">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_google_places_autocomplete
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_blog" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="ladi-hidden"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_blog
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_shopping" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="ladi-hidden"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_shopping
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="app_metu" menu-item-child="" ng-repeat="child in item.childs">
                                    <!---->
                                    <!----><img ng-if="isShowIconImage()" class="builder-menu-icon-image" ng-src="https://w.ladicdn.com/v4/source/builder/img/metu.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/metu.png?v=1.0">
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    app_metu
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="OTP" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="ladi-hidden"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    OTP
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                    </ul>
                </div>

                <div ng-style="styleAddNew()" class="builder-menu-addnew ng-hide" ng-show="showAddNew" style="top: 56px; left: 0px; height: calc(-56px + 100vh);">
                    <div class="builder-menu-addnew-left">
                        <span data-shortcut-menu="element" ng-click="clickMenuLeftElement($event)" class="menu">
            <i class="builder-icon element"></i> Phần tử
        </span>
                        <span ng-click="clickMenuLeftAssets($event)" class="menu">
            <i class="builder-icon assets"></i> Assets
        </span>
                        <div class="line"></div>
                        <!---->
                        <!----><span data-shortcut-menu="section" ng-if="!is_editor_banner" ng-click="clickMenuLeftSection($event)" class="menu">
            <i class="builder-icon section"></i> Section
        </span>
                        <!---->
                        <!----><span data-shortcut-menu="popup" ng-if="!is_editor_banner" ng-click="clickMenuLeftPopup($event)" class="menu">
            <i class="builder-icon popup"></i> Popup
        </span>
                        <!---->
                        <!----><span ng-if="!is_editor_banner" ng-click="clickMenuLeftDropbox($event)" class="menu">
            <i class="builder-icon dropbox"></i> Dropbox
        </span>
                        <!---->
                        <!----><span data-shortcut-menu="product" ng-if="!is_editor_banner &amp;&amp; !is_editor_popupx" ng-click="clickMenuLeftProduct($event)" class="menu">
            <i class="builder-icon product"></i> Sản phẩm
        </span>
                        <!---->
                        <!----><span data-shortcut-menu="blog" ng-if="!is_editor_banner &amp;&amp; !is_editor_popupx" ng-click="clickMenuLeftBLog($event)" class="menu">
            <i class="builder-icon blog"></i> Blog
        </span>
                        <!---->
                        <div class="line"></div>
                        <!----><span data-shortcut-menu="app" ng-if="!is_editor_banner" ng-click="clickMenuLeftApp($event)" class="menu">
            <i class="builder-icon app"></i> Ứng dụng
        </span>
                        <!---->
                        <span ng-click="clickMenuLeftDataset($event)" class="menu">
            <i class="builder-icon dataset"></i> Quản lý nội dung
        </span>
                        <span ng-click="clickMenuLeftMedia($event)" class="menu">
            <i class="builder-icon media"></i> Quản lý Media
        </span>
                        <span ng-click="clickMenuLeftDocument($event)" class="menu">
            <i class="builder-icon folder"></i> Quản lý tài liệu
        </span>
                        <span ng-click="clickMenuLeftFont($event)" class="menu">
            <i class="builder-icon font"></i> Quản lý Font
        </span>
                    </div>
                    <div class="builder-menu-addnew-right">
                        <div class="builder-menu-addnew-app">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Ứng dụng</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <!---->
                                <div data-app="countdown" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/countdown.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/countdown.png?v=1.0">
                                        <span>Countdown</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng này cho phép bạn có thể thêm đồng hồ đếm ngược vào Landing Page một cách nhanh chóng và dễ dàng</div>
                                </div>
                                <!---->
                                <div data-app="notify" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/notify.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/notify.png?v=1.0">
                                        <span>Notify</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng hiển thị lần lượt danh sách khách hàng đã mua hàng dưới dạng thông báo ở góc màn hình</div>
                                </div>
                                <!---->
                                <div data-app="spinlucky" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/spinlucky.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/spinlucky.png?v=1.0">
                                        <span>Spin Lucky</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng vòng quay may mắn tăng tỷ lệ chuyển đổi</div>
                                </div>
                                <!---->
                                <div data-app="review" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/review.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/review.png?v=1.0">
                                        <span>Review</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng hiển thị nhận xét về sản phẩm tăng tỷ lệ chuyển đổi</div>
                                </div>
                                <!---->
                                <div data-app="LADICHAT" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/ladichat.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/ladichat.png?v=1.0">
                                        <span>LadiChat</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng Livechat với khách hàng đa kênh chỉ trong một màn hình. Website Livechat, Messenger, Facebook Comment, Instagram, Zalo, Email, Whatsapp, Telegram, Youtube...</div>
                                </div>
                                <!---->
                                <div data-app="LADIFLOW" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item ladi-hidden" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="">
                                        <span>LADIFLOW</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml"></div>
                                </div>
                                <!---->
                                <div data-app="POPUPX" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/popupx.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/popupx.png?v=1.0">
                                        <span>PopupX</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng giúp bạn hiển thị Popup được tạo từ Builder Landing Page lên 1 website bất kỳ</div>
                                </div>
                                <!---->
                                <div data-app="GOOGLE_RECAPTCHA" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha.png?v=1.0">
                                        <span>reCAPTCHA</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Ứng dụng này cho phép bạn chặn việc trang Landing Page của bạn bị Spam dữ liệu bằng BOT</div>
                                </div>
                                <!---->
                                <div data-app="GOOGLE_RECAPTCHA_CHECKBOX" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item ladi-hidden" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_checkbox.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_checkbox.png?v=1.0">
                                        <span>reCAPTCHA</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml"></div>
                                </div>
                                <!---->
                                <div data-app="GOOGLE_RECAPTCHA_ENTERPRISE" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_enterprise.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_enterprise.png?v=1.0">
                                        <span>reCAPTCHA Enterprise</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Ứng dụng này cho phép bạn chặn việc trang Landing Page của bạn bị Spam dữ liệu bằng BOT</div>
                                </div>
                                <!---->
                                <div data-app="GOOGLE_PLACES_AUTOCOMPLETE" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/ladiui/icons/apps/google-maps-platform.svg" src="https://w.ladicdn.com/ladiui/icons/apps/google-maps-platform.svg">
                                        <span>Place Autocomplete</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Ứng dụng này cho phép tự động hoàn thành trường địa chỉ trên Landing Page</div>
                                </div>
                                <!---->
                                <div data-app="BLOG" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item ladi-hidden" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="">
                                        <span>app_blog</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml"></div>
                                </div>
                                <!---->
                                <div data-app="SHOPPING" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item ladi-hidden" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="">
                                        <span>app_shopping</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml"></div>
                                </div>
                                <!---->
                                <div data-app="METU" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="https://w.ladicdn.com/v4/source/builder/img/metu.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/metu.png?v=1.0">
                                        <span>METU</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml">Tính năng tùy biến nút, công cụ tăng tỷ lệ tương tác với khách hàng trên website</div>
                                </div>
                                <!---->
                                <div data-app="OTP" ng-class="item.className" ng-click="clickItem($event)" app-setting-item="" class="builder-menu-addnew-app-item ladi-hidden" ng-repeat="item in listApp">
                                    <div class="builder-menu-addnew-app-item-header">
                                        <img ng-src="">
                                        <span>OTP</span>
                                    </div>
                                    <div ng-show="showInstalled()" class="builder-menu-addnew-app-installed ng-hide">
                                        <i class="builder-icon check_installed is-background"></i>
                                        <span>Đã cài đặt</span>
                                    </div>
                                    <div class="builder-menu-addnew-app-item-body" ng-bind-html="(item.description | translate) | convertHtml"></div>
                                </div>
                                <!---->
                            </div>
                        </div>

                        <div class="builder-menu-addnew-app-detail" data-app="countdown">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <button ng-click="useApp($event, 'new_countdown')" type="button" class="builder-btn-primary ladiui btn-32 btn btn-outline-primary builder-menu-addnew-app-toggle-use">
                        Sử dụng
                    </button>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/countdown.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/countdown.png?v=1.0">
                                    <span>Countdown</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('countdown_description' | translate) | convertHtml">Tính năng này cho phép bạn có thể thêm đồng hồ đếm ngược vào Landing Page một cách nhanh chóng và dễ dàng</span>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="notify">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <button ng-click="useApp($event, 'new_notify')" type="button" class="builder-btn-primary ladiui btn-32 btn btn-outline-primary builder-menu-addnew-app-toggle-use">
                        Sử dụng
                    </button>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/notify.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/notify.png?v=1.0">
                                    <span>Notify</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('notify_description' | translate) | convertHtml">Tính năng hiển thị lần lượt danh sách khách hàng đã mua hàng dưới dạng thông báo ở góc màn hình</span>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="spinlucky">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <button ng-click="useApp($event, 'new_spinlucky')" type="button" class="builder-btn-primary ladiui btn-32 btn btn-outline-primary builder-menu-addnew-app-toggle-use">
                        Sử dụng
                    </button>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/spinlucky.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/spinlucky.png?v=1.0">
                                    <span>Spin Lucky</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('spinlucky_description' | translate) | convertHtml">Tính năng vòng quay may mắn tăng tỷ lệ chuyển đổi</span>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="review">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <button ng-click="useApp($event, 'new_review')" type="button" class="builder-btn-primary ladiui btn-32 btn btn-outline-primary builder-menu-addnew-app-toggle-use">
                        Sử dụng
                    </button>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/review.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/review.png?v=1.0">
                                    <span>Review</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('review_description' | translate) | convertHtml">Tính năng hiển thị nhận xét về sản phẩm tăng tỷ lệ chuyển đổi</span>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="LADICHAT">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <label class="ladiui switch builder-menu-addnew-app-toggle-use">
                        <input ng-change="changeLadiChatUse()" ng-model="ladiChatUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                        <span class="ladiui slider round"></span>
                    </label>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/ladichat.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/ladichat.png?v=1.0">
                                    <span>LadiChat</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('ladichat_description' | translate) | convertHtml">Tính năng Livechat với khách hàng đa kênh chỉ trong một màn hình. Website Livechat, Messenger, Facebook Comment, Instagram, Zalo, Email, Whatsapp, Telegram, Youtube...</span>

                                    <div ng-show="ladiChatUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Chọn cấu hình</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionFormAccountId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-form-account-id" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="list-form-account ladiui dropdown-menu option-suggest-search option-suggest-menu">
                                                    <li class="li-first">
                                                        <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueSearchFormAccount" type="text" placeholder="Tìm kiếm...">
                                                        <i class="ladiui icon icon-search tooltip">
                                            <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                        </i>
                                                    </li>
                                                    <li class="li-scroll">
                                                        <ul>
                                                            <li ng-click="clickNoFormAccountId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div ng-show="ladiChatUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Widget</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionLadiChatWidgetId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-ladichat-widget-id" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="ladiui dropdown-menu option-suggest-menu">
                                                    <li ng-click="clickNoLadichatWidgetId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                    <!---->
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="builder-menu-addnew-app-item-detail-footer">
                                    <button ng-show="showSettingWidgetId()" ng-click="clickSettingLadiChatWidgetId($event)" type="button" class="button-create-form-account builder-btn-primary ladiui btn btn-outline-primary builder-btn-black ng-hide">
                        Thiết lập cấu hình hiển thị Widget
                    </button>
                                    <button ng-click="clickCreateFormAccountLadiChat($event)" type="button" class="button-create-form-account builder-btn-primary ladiui btn btn-outline-primary builder-btn-black">
                        Tạo cấu hình LadiChat
                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="POPUPX">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <label class="ladiui switch builder-menu-addnew-app-toggle-use">
                        <input ng-change="changePopupXUse()" ng-model="popupXUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                        <span class="ladiui slider round"></span>
                    </label>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/popupx.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/popupx.png?v=1.0">
                                    <span>PopupX</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('popupx_description' | translate) | convertHtml">Tính năng giúp bạn hiển thị Popup được tạo từ Builder Landing Page lên 1 website bất kỳ</span>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="GOOGLE_RECAPTCHA">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <label class="ladiui switch builder-menu-addnew-app-toggle-use">
                        <input ng-change="changeGoogleRecaptchaUse()" ng-model="googleRecaptchaUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                        <span class="ladiui slider round"></span>
                    </label>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha.png?v=1.0">
                                    <span>reCAPTCHA</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('google_recaptcha_description' | translate) | convertHtml">Ứng dụng này cho phép bạn chặn việc trang Landing Page của bạn bị Spam dữ liệu bằng BOT</span>

                                    <div ng-show="googleRecaptchaUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Chọn cấu hình</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionFormAccountId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-form-account-id" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="list-form-account ladiui dropdown-menu option-suggest-search option-suggest-menu">
                                                    <li class="li-first">
                                                        <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueSearchFormAccount" type="text" placeholder="Tìm kiếm...">
                                                        <i class="ladiui icon icon-search tooltip">
                                            <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                        </i>
                                                    </li>
                                                    <li class="li-scroll">
                                                        <ul>
                                                            <li ng-click="clickNoFormAccountId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="builder-menu-addnew-app-item-detail-footer">
                                    <button ng-click="clickCreateFormAccountGoogleRecaptcha($event)" type="button" class="builder-btn-primary ladiui btn btn-outline-primary builder-btn-black">Tạo cấu hình reCAPTCHA
                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="GOOGLE_RECAPTCHA_ENTERPRISE">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <label class="ladiui switch builder-menu-addnew-app-toggle-use">
                        <input ng-change="changeGoogleRecaptchaEnterpriseUse()" ng-model="googleRecaptchaEnterpriseUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                        <span class="ladiui slider round"></span>
                    </label>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_enterprise.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/google_recaptcha_enterprise.png?v=1.0">
                                    <span>reCAPTCHA Enterprise</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('google_recaptcha_enterprise_description' | translate) | convertHtml">Ứng dụng này cho phép bạn chặn việc trang Landing Page của bạn bị Spam dữ liệu bằng BOT</span>

                                    <div ng-show="googleRecaptchaEnterpriseUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Chọn cấu hình</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionFormAccountId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-form-account-id" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="list-form-account ladiui dropdown-menu option-suggest-search option-suggest-menu">
                                                    <li class="li-first">
                                                        <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueSearchFormAccount" type="text" placeholder="Tìm kiếm...">
                                                        <i class="ladiui icon icon-search tooltip">
                                            <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                        </i>
                                                    </li>
                                                    <li class="li-scroll">
                                                        <ul>
                                                            <li ng-click="clickNoFormAccountId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="builder-menu-addnew-app-item-detail-footer">
                                    <button ng-click="clickCreateFormAccountGoogleRecaptchaEnterprise($event)" type="button" class="builder-btn-primary ladiui btn btn-outline-primary builder-btn-black">Tạo cấu hình reCAPTCHA Enterprise
                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="GOOGLE_PLACES_AUTOCOMPLETE">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <label class="ladiui switch builder-menu-addnew-app-toggle-use">
                        <input ng-change="changeGooglePlacesAutocomplete()" ng-model="googlePlacesAutoCompleteUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                        <span class="ladiui slider round"></span>
                    </label>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/ladiui/icons/apps/google-maps-platform.svg" src="https://w.ladicdn.com/ladiui/icons/apps/google-maps-platform.svg">
                                    <span>Place Autocomplete</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('google_places_autocomplete_description' | translate) | convertHtml">Ứng dụng này cho phép tự động hoàn thành trường địa chỉ trên Landing Page</span>

                                    <div ng-show="googlePlacesAutoCompleteUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Chọn cấu hình</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionFormAccountId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-form-account-id" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="list-form-account ladiui dropdown-menu option-suggest-search option-suggest-menu">
                                                    <li class="li-first">
                                                        <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueSearchFormAccount" type="text" placeholder="Tìm kiếm...">
                                                        <i class="ladiui icon icon-search tooltip">
                                            <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                        </i>
                                                    </li>
                                                    <li class="li-scroll">
                                                        <ul>
                                                            <li ng-click="clickNoFormAccountId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="builder-menu-addnew-app-item-detail-footer">
                                    <button ng-click="clickCreateFormAccountGooglePlacesAutocomplete($event)" type="button" class="builder-btn-primary ladiui btn btn-outline-primary builder-btn-black">Tạo cấu hình Place Autocomplete
                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="builder-menu-addnew-app-detail" data-app="METU">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li class="selected">Thiết lập</li>
                            </div>
                            <div ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="position-relative">
                                    <label class="ladiui switch builder-menu-addnew-app-toggle-use">
                        <input ng-change="changeMetuUse()" ng-model="metuUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                        <span class="ladiui slider round"></span>
                    </label>
                                </div>
                                <div class="builder-menu-addnew-app-item-header">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/img/metu.png?v=1.0" src="https://w.ladicdn.com/v4/source/builder/img/metu.png?v=1.0">
                                    <span>METU</span>
                                </div>
                                <div class="builder-menu-addnew-app-item-detail-body">
                                    <span class="color-secondary" ng-bind-html="::('metu_description' | translate) | convertHtml">Tính năng tùy biến nút, công cụ tăng tỷ lệ tương tác với khách hàng trên website</span>

                                    <div ng-show="metuUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Chọn cấu hình</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionFormAccountId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-form-account-id" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="list-form-account ladiui dropdown-menu option-suggest-search option-suggest-menu">
                                                    <li class="li-first">
                                                        <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueSearchFormAccount" type="text" placeholder="Tìm kiếm...">
                                                        <i class="ladiui icon icon-search tooltip">
                                            <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                        </i>
                                                    </li>
                                                    <li class="li-scroll">
                                                        <ul>
                                                            <li ng-click="clickNoFormAccountId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div ng-show="metuUse" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                        <label class="builder-menu-addnew-app-item-detail-body-label">Menu hiển thị</label>
                                        <div class="builder-menu-addnew-app-item-detail-body-value">
                                            <div class="ladiui select-search dropdown option-suggest">
                                                <button ng-click="toggleOptionMetuMenuId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown" data-toggle="dropdown">
                                    <span class="ladiui dropdown-text"></span>
                                    <i class="builder-icon arrow_down background-secondary"></i>
                                </button>
                                                <ul class="ladiui dropdown-menu option-suggest-menu">
                                                    <li ng-click="clickNoMetuMenuId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                    <!---->
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="builder-menu-addnew-app-item-detail-footer">
                                    <button ng-click="clickCreateFormAccountMetu($event)" type="button" class="builder-btn-primary ladiui btn btn-outline-primary builder-btn-black">Tạo cấu hình METU
                    </button>
                                    <button ng-click="clickLoginMetu($event)" type="button" class="builder-btn-primary ladiui btn btn-outline-primary builder-btn-black">
                        Đăng nhập METU
                    </button>
                                </div>
                            </div>
                        </div>

                        <div data-active="design" ng-class="classSettingBlog()" class="builder-menu-addnew-blog builder-menu-addnew-active min-size">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li ng-click="clickTabDesign($event)" class="selected">Thiết kế</li>
                            </div>
                            <div data-tab="design" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-setting-intro blog" ng-show="!blogUse || !isSettingBlog()">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/svg/blog_intro.svg?v=1.0" src="https://w.ladicdn.com/v4/source/builder/svg/blog_intro.svg?v=1.0">
                                    <div ng-bind-html="('blog_intro' | translate) | convertHtml">
                                        <div style="font-size: 18px;" class="text-center font-weight-500">Tính năng blog</div><br>
                                        <div style="font-size: 14px;" class="text-center color-secondary">Cho phép bạn tạo bài viết nội dung và cập nhật nội dung đó trên trang của bạn.</div><br><br>
                                        <ul>
                                            <li>Thiết lập đơn giản dễ sử dụng</li>
                                            <li>Quản lý bài viết linh hoạt dễ dàng</li>
                                        </ul>
                                    </div>
                                    <button ng-click="activeBlogNow($event)" class="ladiui btn btn-primary">Kích hoạt ngay
                    </button>
                                </div>
                                <div ng-show="blogUse &amp;&amp; isSettingBlog()" class="ng-hide">
                                    <div class="builder-shopping-toggle">
                                        <span>Kích hoạt tính năng Blog</span>
                                        <label class="ladiui switch">
                            <input ng-change="changeBlogSettingDisplay()" ng-model="blogUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                            <span class="ladiui slider round"></span>
                        </label>
                                    </div>
                                    <div ng-show="blogUse" class="ng-hide">
                                        <div class="builder-menu-addnew-element-thumb">
                                            <div style="width: 390px; height: 164px;" class="background">
                                                <div data-id="POPUP_BLOG" ng-style="elementPreviewStyle('POPUP_BLOG')" ng-bind-html="elementPreviewHtml('POPUP_BLOG', false) | convertHtml" class="preview-html"></div>
                                                <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickPopupBlog($event)">Chỉnh sửa
                                </button>
                                            </div>
                                            <div class="title"><span>POPUP_BLOG</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-active="design" class="builder-menu-addnew-product builder-menu-addnew-active">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li data-tab-name="design" ng-show="shoppingUse" ng-click="clickTabDesign($event)" class="selected ng-hide">Thiết kế
                                </li>
                                <li data-tab-name="setting" ng-click="clickTabSetting($event)">Thiết lập</li>
                            </div>
                            <div ng-show="shoppingUse" data-tab="design" ng-style="styleAddNewContent()" class="builder-menu-addnew-content ng-hide" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-thumb">
                                    <div class="background">
                                        <img style="width: 170px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/buy_now-20221217031339-sspqk.svg?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/buy_now-20221217031339-sspqk.svg?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewBuyButtonLadiSales($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Buy Button (LadiSales)</span>
                                    </div>
                                </div>
                                <div class="builder-menu-addnew-element-thumb">
                                    <div class="background">
                                        <img style="width: 170px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/add_to_cart-20221217031339-vx8ij.svg?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/add_to_cart-20221217031339-vx8ij.svg?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewAddToCartButtonLadiSales($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Add To Cart Button (LadiSales)</span>
                                    </div>
                                </div>
                                <div ng-show="isAdvanceShopping" class="builder-menu-addnew-element-thumb ng-hide">
                                    <div class="background">
                                        <img style="width: 357px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/product_list-20220811075229.png?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/product_list-20220811075229.png?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewProductList($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Product List</span>
                                    </div>
                                </div>
                                <div ng-show="isAdvanceShopping" class="builder-menu-addnew-element-thumb ng-hide">
                                    <div class="background">
                                        <img style="width: 280px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/cart_button-20220811075229.png?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/cart_button-20220811075229.png?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewCartButton($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Cart Button</span>
                                    </div>
                                </div>
                                <div ng-show="isAdvanceShopping" class="builder-menu-addnew-element-thumb ng-hide">
                                    <div class="background">
                                        <img style="width: 45px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/cart-20220811075229.png?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/cart-20220811075229.png?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewCart($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Cart</span>
                                    </div>
                                </div>
                                <div ng-show="isAdvanceShopping" class="builder-menu-addnew-element-thumb ng-hide">
                                    <div class="background">
                                        <img style="width: 340px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/delivery_method-20220811075229.png?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/delivery_method-20220811075229.png?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewDeliveryMethod($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Phương thức vận chuyển</span>
                                    </div>
                                </div>
                                <div ng-show="isAdvanceShopping" class="builder-menu-addnew-element-thumb ng-hide">
                                    <div class="background">
                                        <img style="width: 340px;" ng-src="https://w.ladicdn.com/5d47d426e740623cbe011753/form_coupon-20220811075229.png?v=1.0" src="https://w.ladicdn.com/5d47d426e740623cbe011753/form_coupon-20220811075229.png?v=1.0">
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickNewFormCoupon($event)">Thêm
                        </button>
                                    </div>
                                    <div class="title">
                                        <span>Form nhập mã giảm giá</span>
                                    </div>
                                </div>
                            </div>
                            <div data-tab="setting" ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="builder-setting-intro" ng-show="!shoppingUse || !isSettingShopping()">
                                    <img ng-src="https://w.ladicdn.com/v4/source/builder/svg/shopping_intro.svg?v=1.0" src="https://w.ladicdn.com/v4/source/builder/svg/shopping_intro.svg?v=1.0">
                                    <div ng-bind-html="::('shopping_intro' | translate) | convertHtml">
                                        <div style="font-size: 18px;" class="text-center font-weight-500">Tính năng sản phẩm</div><br>
                                        <div style="font-size: 14px;" class="text-center color-secondary">Quản lý và bán sản phẩm của bạn ngay trên Landing Page một cách dễ dàng</div><br><br>
                                        <ul>
                                            <li>Tích hợp kết nối đa nền tảng bán hàng: Shopify, WooCommerce WordPress, Haravan, Sapo Web, LadiSales...</li>
                                            <li>Tính năng giỏ hàng tiện lợi</li>
                                            <li>Tối ưu hóa quy trình mua hàng</li>
                                        </ul>
                                    </div>
                                    <button ng-click="activeShoppingNow($event)" class="ladiui btn btn-primary">Kích hoạt ngay
                    </button>
                                </div>
                                <div ng-show="shoppingUse &amp;&amp; isSettingShopping()" class="ng-hide">
                                    <div class="builder-shopping-toggle">
                                        <span>Kích hoạt tính năng sản phẩm</span>
                                        <label class="ladiui switch">
                            <input ng-change="changeShoppingSettingDisplay()" ng-model="shoppingUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                            <span class="ladiui slider round"></span>
                        </label>
                                    </div>

                                    <div ng-show="shoppingUse" class="ng-hide">
                                        <div class="builder-menu-addnew-app-item-header">
                                            <span>Thiết lập chung</span>
                                        </div>
                                        <div class="builder-menu-addnew-app-item-detail-body">
                                            <div class="builder-menu-addnew-app-item-detail-body-item">
                                                <label class="builder-menu-addnew-app-item-detail-body-label">Chọn cấu hình</label>
                                                <div class="builder-menu-addnew-app-item-detail-body-value">
                                                    <div class="ladiui select-search dropdown option-suggest">
                                                        <button ng-click="toggleOptionFormAccountId($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-form-account-id" data-toggle="dropdown">
                                            <span class="ladiui dropdown-text"></span>
                                            <i class="builder-icon arrow_down background-secondary"></i>
                                        </button>
                                                        <ul class="list-form-account ladiui dropdown-menu option-suggest-search option-suggest-menu">
                                                            <li class="li-first">
                                                                <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueSearchFormAccount" type="text" placeholder="Tìm kiếm...">
                                                                <i class="ladiui icon icon-search tooltip">
                                                    <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                                </i>
                                                            </li>
                                                            <li class="li-scroll">
                                                                <ul>
                                                                    <li ng-click="clickNoFormAccountId($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                                    <!---->
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div ng-show="shoppingIsLadiSale()" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                                <label class="builder-menu-addnew-app-item-detail-body-label">
                                    <span>Cấu hình thanh toán</span>
                                    <span class="builder-icon help tooltip background-secondary">
                                        <span class="tooltiptext top" tooltiptext="Chuyển trang đến LadiSales theo cấu hình thanh toán"></span>
                                    </span>
                                </label>
                                                <div class="builder-menu-addnew-app-item-detail-body-value">
                                                    <div class="ladiui select-search dropdown option-suggest">
                                                        <button ng-click="toggleOptionCheckoutConfig($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-checkout-page" data-toggle="dropdown">
                                            <span class="ladiui dropdown-text"></span>
                                            <i class="builder-icon arrow_down background-secondary"></i>
                                        </button>
                                                        <ul class="list-form-account ladiui dropdown-menu option-suggest-menu">
                                                            <li ng-click="clickNoCheckoutConfig($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div ng-show="shoppingIsLadiSale()" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                                <label class="builder-menu-addnew-app-item-detail-body-label">
                                    <span>Trang thanh toán</span>
                                    <span class="builder-icon help tooltip background-secondary">
                                        <span class="tooltiptext top" tooltiptext="Sử dụng cho Buy Button, Add To Cart Button"></span>
                                    </span>
                                </label>
                                                <div class="builder-menu-addnew-app-item-detail-body-value">
                                                    <div class="ladiui select-search dropdown option-suggest">
                                                        <button ng-click="toggleOptionCheckoutPage($event)" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown select-checkout-page" data-toggle="dropdown">
                                            <span class="ladiui dropdown-text"></span>
                                            <i class="builder-icon arrow_down background-secondary"></i>
                                        </button>
                                                        <ul class="list-form-account ladiui dropdown-menu option-suggest-menu">
                                                            <li ng-click="clickNoCheckoutPage($event)"><span class="ladiui dropdown-item"><label>Không chọn</label></span></li>
                                                            <!---->
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>

                                            <div style="display: none;" ng-show="!shoppingThirdPartyUse &amp;&amp; shoppingIsLadiSale()" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                                <label class="builder-menu-addnew-app-item-detail-body-label">Thanh toán qua LadiSales</label>
                                                <div class="builder-menu-addnew-app-item-detail-body-value">
                                                    <label class="ladiui switch sw-sm">
                                        <input ng-change="changeShoppingConfigCheckoutUse()" ng-model="shoppingConfigCheckoutUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                                        <span class="ladiui sw-sm slider round"></span>
                                    </label>
                                                </div>
                                            </div>

                                            <div style="display: none;" ng-show="!shoppingThirdPartyUse &amp;&amp; shoppingConfigCheckoutUse &amp;&amp; shoppingIsLadiSale()" class="builder-menu-addnew-app-item-detail-body-item ng-hide">
                                                <label class="builder-menu-addnew-app-item-detail-body-label">ID Cấu hình thanh toán</label>
                                                <div class="builder-menu-addnew-app-item-detail-body-value">
                                                    <input ng-change="changeShoppingConfigCheckoutId()" ng-model="shoppingConfigCheckoutId" class="ladiui form-control ng-pristine ng-untouched ng-valid ng-empty" autocomplete="off" type="text">
                                                </div>
                                            </div>
                                        </div>

                                        <div ng-show="showAdvanceShopping()" class="ng-hide">
                                            <div class="builder-shopping-toggle margin-top-30">
                                                <span>Thiết lập nâng cao</span>
                                                <label ng-class="classShoppingAdvance()" class="ladiui switch">
                                    <input ng-change="changeShoppingAdvance()" ng-model="isAdvanceShopping" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-empty">
                                    <span class="ladiui slider round"></span>
                                </label>
                                            </div>
                                            <div ng-show="isAdvanceShopping" class="builder-menu-addnew-app-item-header margin-top-16 ng-hide">
                                                <span class="font-weight-400 color-secondary">Chỉnh sửa Popup</span>
                                            </div>
                                            <div ng-show="isAdvanceShopping" class="builder-menu-addnew-app-item-detail-body ng-hide">
                                                <div ng-click="clickPopupProduct($event)" class="builder-menu-addnew-app-item-detail-body-item-popup">
                                                    <i class="builder-icon is-background popup_product"></i>
                                                    <span>POPUP_PRODUCT</span>
                                                </div>
                                                <div ng-click="clickPopupCart($event)" class="builder-menu-addnew-app-item-detail-body-item-popup">
                                                    <i class="builder-icon is-background popup_cart"></i>
                                                    <span>POPUP_CART</span>
                                                </div>
                                                <div ng-show="showPopupCheckout()" ng-click="clickPopupCheckout($event)" class="builder-menu-addnew-app-item-detail-body-item-popup ng-hide">
                                                    <i class="builder-icon is-background popup_checkout"></i>
                                                    <span>POPUP_CHECKOUT</span>
                                                </div>
                                            </div>
                                            <div ng-show="isAdvanceShopping" class="builder-menu-addnew-app-item-detail-body-item third_party ng-hide">
                                                <label class="builder-menu-addnew-app-item-detail-body-label">
                                    <span>Third Party Checkout</span>
                                    <span class="builder-icon help tooltip background-secondary">
                                        <span class="tooltiptext top" tooltiptext="Chuyển đến trang Checkout của bên thứ 3"></span>
                                    </span>
                                </label>
                                                <div class="builder-menu-addnew-app-item-detail-body-value">
                                                    <label ng-class="classShoppingThirdPartyUse()" class="ladiui switch">
                                        <input ng-change="changeShoppingThirdPartyUse()" ng-model="shoppingThirdPartyUse" type="checkbox" class="ng-pristine ng-untouched ng-valid ng-not-empty">
                                        <span class="ladiui slider round"></span>
                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div data-active="list" class="builder-menu-addnew-dropbox builder-menu-addnew-active">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li ng-click="clickTabList($event)" class="selected">Danh sách</li>
                                <li ng-click="clickTabTemplate($event)">Dropbox mẫu</li>
                                <li ng-click="clickTabYourTemplate($event)">Dropbox của tôi</li>
                                <li ng-click="clickLoadMoreDropbox($event)" class="color-primary last">Xem thêm
                                </li>
                            </div>
                            <div data-tab="list" ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-content-header">
                                    <span class="builder-menu-addnew-content-header-left">DROPBOX TRONG TRANG</span>
                                    <span class="builder-menu-addnew-content-header-right">
                        <i class="builder-icon add_small background-primary"></i>
                        <a ng-click="clickNewDropbox($event)">Thêm mới Dropbox</a>
                    </span>
                                </div>

                                <!---->
                            </div>
                            <div data-tab="template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllDropboxTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                            <div data-tab="your_template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllDropboxYourTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                        </div>

                        <div data-active="list" class="builder-menu-addnew-popup builder-menu-addnew-active">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li ng-click="clickTabList($event)" class="selected">Danh sách</li>
                                <li ng-click="clickTabTemplate($event)">Popup mẫu</li>
                                <li ng-click="clickTabYourTemplate($event)">Popup của tôi</li>
                                <li ng-click="clickLoadMorePopup($event)" class="color-primary last">Xem thêm
                                </li>
                            </div>
                            <div data-tab="list" ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-content-header">
                                    <span class="builder-menu-addnew-content-header-left">POPUP TRONG TRANG</span>
                                    <span class="builder-menu-addnew-content-header-right">
                        <i class="builder-icon add_small background-primary"></i>
                        <a ng-click="clickNewPopup($event)">Thêm mới Popup</a>
                    </span>
                                </div>

                                <!---->
                                <div ng-class="classItem()" ng-show="showItem()" ng-init="is_popup = true;" element-menu-left-item="" class="builder-menu-addnew-element-thumb ng-hide" ng-repeat="item in listPopup">
                                    <div style="width: 390px; height: 164px;" class="background">
                                        <div data-id="POPUP_OTP" ng-style="elementPreviewStyle(item)" ng-bind-html="elementPreviewHtml(item, false) | convertHtml" class="preview-html"></div>
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickItem($event)">Chỉnh sửa</button>
                                    </div>
                                    <div class="title">
                                        <span>POPUP_OTP</span>
                                        <div ng-show="showAction()" class="menu ladiui dropdown option-suggest position-relative ng-hide">
                                            <i ng-click="clickMenu($event)" class="ladiui dropdown-toggle basic select-dropdown builder-icon dot_menu background-black" data-toggle="dropdown"></i>
                                            <ul class="ladiui dropdown-menu option-suggest-menu">
                                                <li ng-click="edit($event)"><a class="ladiui dropdown-item">Chỉnh sửa thông tin</a></li>
                                                <li ng-click="delete($event)"><a class="ladiui dropdown-item color-danger">Xoá</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!---->
                                </div>
                                <!---->
                                <div ng-class="classItem()" ng-show="showItem()" ng-init="is_popup = true;" element-menu-left-item="" class="builder-menu-addnew-element-thumb" ng-repeat="item in listPopup">
                                    <div style="width: 390px; height: 164px;" class="background">
                                        <div data-id="POPUP45" ng-style="elementPreviewStyle(item)" ng-bind-html="elementPreviewHtml(item, false) | convertHtml" class="preview-html"></div>
                                        <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickItem($event)">Chỉnh sửa</button>
                                    </div>
                                    <div class="title">
                                        <span>POPUP45</span>
                                        <div ng-show="showAction()" class="menu ladiui dropdown option-suggest position-relative">
                                            <i ng-click="clickMenu($event)" class="ladiui dropdown-toggle basic select-dropdown builder-icon dot_menu background-black" data-toggle="dropdown"></i>
                                            <ul class="ladiui dropdown-menu option-suggest-menu">
                                                <li ng-click="edit($event)"><a class="ladiui dropdown-item">Chỉnh sửa thông tin</a></li>
                                                <li ng-click="delete($event)"><a class="ladiui dropdown-item color-danger">Xoá</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <!---->
                                </div>
                                <!---->
                            </div>
                            <div data-tab="template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllPopupTemplate($event)" class="builder-menu-addnew-element-tag-item selected">
                                        <span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                            <div data-tab="your_template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllPopupYourTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                        </div>

                        <div data-active="list" class="builder-menu-addnew-section builder-menu-addnew-active">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li ng-click="clickTabList($event)" class="selected">Danh sách</li>
                                <li ng-click="clickTabTemplate($event)">Section mẫu</li>
                                <li ng-click="clickTabYourTemplate($event)">Section của tôi</li>
                                <li ng-click="clickLoadMoreSection($event)" class="color-primary last">Xem thêm
                                </li>
                            </div>
                            <div data-tab="list" ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-content-header">
                                    <span class="builder-menu-addnew-content-header-left">SECTION TRONG TRANG</span>
                                    <span class="builder-menu-addnew-content-header-right">
                        <i class="builder-icon add_small background-primary"></i>
                        <a ng-click="clickNewSection($event)">Thêm mới Section</a>
                    </span>
                                </div>

                                <div class="builder-menu-addnew-element-thumb-sortable ui-sortable">
                                    <!---->
                                    <div ng-class="classItem()" ng-show="showItem()" ng-init="is_section = true;" element-menu-left-item="" class="builder-menu-addnew-element-thumb ui-sortable-handle" ng-repeat="item in listSection">
                                        <div style="width: 390px; height: 164px;" class="background">
                                            <div data-id="SECTION2" ng-style="elementPreviewStyle(item)" ng-bind-html="elementPreviewHtml(item, false) | convertHtml" class="preview-html"></div>
                                            <button class="ladiui btn btn-32 btn-primary hover-click" ng-click="clickItem($event)">Chỉnh sửa</button>
                                        </div>
                                        <div class="title">
                                            <span>SECTION2</span>
                                            <div ng-show="showAction()" class="menu ladiui dropdown option-suggest position-relative">
                                                <i ng-click="clickMenu($event)" class="ladiui dropdown-toggle basic select-dropdown builder-icon dot_menu background-black" data-toggle="dropdown"></i>
                                                <ul class="ladiui dropdown-menu option-suggest-menu">
                                                    <li ng-click="edit($event)"><a class="ladiui dropdown-item">Chỉnh sửa thông tin</a></li>
                                                    <li ng-click="delete($event)"><a class="ladiui dropdown-item color-danger">Xoá</a></li>
                                                </ul>
                                            </div>
                                        </div>

                                        <!---->
                                        <script ng-if="$last &amp;&amp; is_section" type="text/javascript">
                                            (function() {
                                                var list = document.getElementsByClassName('builder-menu-addnew-element-thumb-sortable');
                                                for (var i = 0; i < list.length; i++) {
                                                    LadiPage.setSortableElement(list[i], {
                                                        isCancel: false
                                                    }, function(oldIndex, newIndex, callbackCancel) {
                                                        window.$rootScope.$broadcast('update-section-position', {
                                                            callbackCancel: callbackCancel,
                                                            oldIndex: oldIndex,
                                                            newIndex: newIndex
                                                        });
                                                    });
                                                }
                                            })();
                                        </script>
                                        <!---->
                                    </div>
                                    <!---->
                                </div>
                            </div>
                            <div data-tab="template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-show="!is_editor_popupx" ng-click="clickAllSectionTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                            <div data-tab="your_template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllSectionYourTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                        </div>

                        <div data-active="list" class="builder-menu-addnew-banner builder-menu-addnew-active">
                            <div ng-style="styleAddNewHeader()" class="builder-menu-addnew-header" style="height: 58px;">
                                <li ng-click="clickTabList($event)" class="selected">Danh sách</li>
                                <li ng-click="clickTabTemplate($event)">Banner mẫu</li>
                                <li ng-click="clickLoadMoreBanner($event)" class="color-primary last">Xem thêm
                                </li>
                            </div>
                            <div data-tab="list" ng-style="styleAddNewContent()" class="builder-menu-addnew-content option-suggest-scroll" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-content-header">
                                    <span class="builder-menu-addnew-content-header-left">BANNER TRONG TRANG</span>
                                    <span class="builder-menu-addnew-content-header-right">
                        <i class="builder-icon add_small background-primary"></i>
                        <a ng-click="clickNewBanner($event)">Thêm mới Banner</a>
                    </span>
                                </div>

                                <!---->
                            </div>
                            <div data-tab="template" ng-style="styleAddNewContent()" class="builder-menu-addnew-content" style="height: calc(-115px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllBannerTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                        </div>

                        <div class="builder-menu-addnew-assets">
                            <div ng-style="styleAddNewContentAssets()" class="builder-menu-addnew-content" style="height: calc(-57px + 100vh);">
                                <div class="builder-menu-addnew-element-tag">
                                    <div ng-click="clickAllAssetsYourTemplate($event)" class="builder-menu-addnew-element-tag-item selected"><span>Tất cả</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-header">
                                    <li class="no-select">Assets</li>
                                    <li ng-click="clickLoadMoreAssets($event)" class="no-select builder-button-link last">Quản lý Assets
                                    </li>
                                </div>
                                <div class="builder-menu-addnew-element-content builder-menu-addnew-element-list option-suggest-scroll">
                                    <!---->
                                </div>
                            </div>
                        </div>

                        <div class="builder-menu-addnew-element">
                            <div ng-style="styleAddNewContentElement()" class="builder-menu-addnew-content" style="height: calc(-57px + 100vh);">
                                <div class="builder-menu-addnew-element-tag element">
                                    <div data-shortcut-element="headline" ng-click="clickElementHeadline($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon headline"></i>
                                        <span>Văn bản</span>
                                    </div>
                                    <div data-shortcut-element="button" ng-click="clickElementButton($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon button"></i>
                                        <span>Nút bấm</span>
                                    </div>
                                    <div data-shortcut-element="image" ng-click="clickElementImage($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon image"></i>
                                        <span>Ảnh</span>
                                    </div>
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementGallery($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon gallery"></i>
                                        <span>Gallery</span>
                                    </div>
                                    <!---->
                                    <div data-shortcut-element="box" ng-click="clickElementBox($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon box"></i>
                                        <span>Hình hộp</span>
                                    </div>
                                    <div ng-click="clickElementShape($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon shape"></i>
                                        <span>Biểu tượng</span>
                                    </div>
                                    <div ng-click="clickElementLine($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon line"></i>
                                        <span>Đường kẻ</span>
                                    </div>
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementForm($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon form"></i>
                                        <span>Form</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementVideo($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon video"></i>
                                        <span>Video</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementCollection($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon collection"></i>
                                        <span>Collection List</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementCarousel($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon carousel"></i>
                                        <span>Carousel</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementTabs($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon tabs"></i>
                                        <span>Tabs</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementFrame($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon frame"></i>
                                        <span>Frame</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementAccordion($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon accordion"></i>
                                        <span>Accordion</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementTable($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon table"></i>
                                        <span>Table</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementSurvey($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon survey"></i>
                                        <span>Survey</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <div data-item="element-menu" ng-if="!is_editor_banner" ng-click="clickElementMenu($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon menu"></i>
                                        <span>Menu</span>
                                    </div>
                                    <!---->
                                    <!---->
                                    <!---->
                                    <div ng-if="!is_editor_banner" ng-click="clickElementHtmlCode($event)" class="builder-menu-addnew-element-tag-item">
                                        <i class="builder-icon html_code"></i>
                                        <span>Mã HTML</span>
                                    </div>
                                    <!---->
                                </div>

                                <div class="builder-menu-addnew-element-box">
                                    <div data-element="image" data-tab="ladipage" data-group="" class="builder-menu-addnew-element-header">
                                        <li data-tab="ladipage" ng-click="clickTabElementImage($event)" class="selected">Ảnh
                                        </li>
                                        <li data-tab="FREE" ng-click="clickTabElementImageFree($event)">Ảnh miễn phí
                                        </li>
                                        <li data-tab="Illustration" ng-click="clickTabElementImageIllustration($event)">Ảnh minh hoạ
                                        </li>
                                        <li ng-click="clickLoadMoreElementImage($event)" class="no-select builder-button-link last">Xem thêm
                                        </li>
                                    </div>
                                    <div data-element="gallery" data-tab="gallery" class="builder-menu-addnew-element-header">
                                        <li data-tab="gallery" class="no-select">Gallery</li>
                                    </div>
                                    <div data-element="box" data-tab="box" class="builder-menu-addnew-element-header">
                                        <li data-tab="box" class="no-select">Hình hộp</li>
                                    </div>
                                    <div data-element="collection" data-tab="collection" class="builder-menu-addnew-element-header">
                                        <li data-tab="collection" class="no-select">Collection List</li>
                                    </div>
                                    <div data-element="carousel" data-tab="carousel" class="builder-menu-addnew-element-header">
                                        <li data-tab="carousel" class="no-select">Carousel</li>
                                    </div>
                                    <div data-element="tabs" data-tab="tabs" class="builder-menu-addnew-element-header">
                                        <li data-tab="tabs" class="no-select">Tabs</li>
                                    </div>
                                    <div data-element="form" data-tab="form" class="builder-menu-addnew-element-header">
                                        <li data-tab="form" ng-click="clickTabElementForm($event)" class="selected">Form
                                        </li>
                                        <!---->
                                        <li ng-if="!is_editor_banner &amp;&amp; !is_editor_popupx" ng-click="clickTabElementFormLogin($event)" data-tab="form_login">Form Login
                                        </li>
                                        <!---->
                                        <!---->
                                        <li ng-if="!is_editor_banner" ng-click="clickTabElementFormOtp($event)" data-tab="form_otp">Form OTP
                                        </li>
                                        <!---->
                                    </div>
                                    <div data-element="frame" data-tab="frame" class="builder-menu-addnew-element-header">
                                        <li data-tab="frame" class="no-select">Frame</li>
                                    </div>
                                    <div data-element="accordion" data-tab="accordion" class="builder-menu-addnew-element-header">
                                        <li data-tab="accordion" class="no-select">Accordion</li>
                                    </div>
                                    <div data-element="table" data-tab="table" class="builder-menu-addnew-element-header">
                                        <li data-tab="table" class="no-select">Table</li>
                                    </div>
                                    <div data-element="survey" data-tab="survey" class="builder-menu-addnew-element-header">
                                        <li data-tab="survey" class="no-select">Survey</li>
                                    </div>
                                    <div data-element="menu" data-tab="menu" class="builder-menu-addnew-element-header">
                                        <li data-tab="menu" class="no-select">Menu</li>
                                    </div>
                                    <div data-element="html_code" data-tab="html_code" class="builder-menu-addnew-element-header">
                                        <li data-tab="html_code" class="no-select">Mã HTML</li>
                                    </div>
                                    <div data-element="button" data-tab="button" class="builder-menu-addnew-element-header">
                                        <li data-tab="button" ng-click="clickTabElementButton($event)" class="selected">Nút bấm
                                        </li>
                                        <!---->
                                        <li ng-if="!is_editor_banner" data-tab="button_group" ng-click="clickTabElementButtonGroup($event)">Nhóm nút bấm
                                        </li>
                                        <!---->
                                    </div>
                                    <div data-element="headline" data-tab="headline" class="builder-menu-addnew-element-header">
                                        <li data-tab="headline" ng-click="clickTabElementHeadline($event)" class="selected">
                                            Tiêu đề
                                        </li>
                                        <li data-tab="paragraph" ng-click="clickTabElementParagraph($event)">
                                            Đoạn văn
                                        </li>
                                        <li data-tab="list_paragraph" ng-click="clickTabElementListParagraph($event)">
                                            Danh sách
                                        </li>
                                    </div>
                                    <div data-element="website" data-tab="pagination" class="builder-menu-addnew-element-header">
                                        <li data-tab="pagination" ng-click="clickTabElementPagination($event)" class="selected">
                                            Pagination
                                        </li>
                                        <li data-tab="search" ng-click="clickTabElementSearch($event)">
                                            Tìm kiếm
                                        </li>
                                    </div>
                                    <div data-element="line" data-tab="line" class="builder-menu-addnew-element-header">
                                        <li data-tab="line" ng-click="clickTabElementLine($event)" class="selected">Đường kẻ
                                        </li>
                                        <li data-tab="pen_tool" ng-click="clickTabElementPenTool($event)">Pen Tool
                                        </li>
                                    </div>
                                    <div data-element="shape" data-tab="Socials" class="builder-menu-addnew-element-header">
                                        <li data-tab="Socials" ng-click="clickTabElementShapeSocials($event)" class="selected">Socials
                                        </li>
                                        <li data-tab="Icons" ng-click="clickTabElementShapeIcons($event)">Icons
                                        </li>
                                        <li data-tab="Premium Icons" ng-click="clickTabElementShapePremium($event)">Premium
                                        </li>
                                        <li ng-click="clickLoadMoreElementShape($event)" class="no-select builder-button-link last">Xem thêm
                                        </li>
                                    </div>
                                    <div data-element="video" data-tab="video" class="builder-menu-addnew-element-header">
                                        <li data-tab="video" class="no-select">Video</li>
                                        <li ng-click="clickLoadMoreElementVideo($event)" class="no-select builder-button-link last">Xem thêm
                                        </li>
                                    </div>
                                    <div data-element="image" menu-element-image="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list option-suggest-scroll">
                                        <div ng-class="classSearch()" class="builder-menu-addnew-element-search">
                                            <input ng-keydown="$event.keyCode === 13 &amp;&amp; search()" ng-change="changeTextSearch()" ng-model="textSearch" class="ladiui form-control ng-pristine ng-untouched ng-valid ng-empty" type="text" placeholder="Tìm kiếm...">
                                            <i ng-click="search($event)" class="builder-icon search background-secondary tooltip">
        <span class="tooltiptext left" tooltiptext="Tìm kiếm"></span>
    </i>

                                            <button ng-click="clickUploadFile($event)" type="button" class="builder-btn-second builder-button-upload-file btn-32 ladiui btn btn-primary">
        <i class="builder-icon background-white add"></i>
        <span>Chọn tệp</span>
    </button>
                                        </div>
                                        <div ng-show="showGroup()" class="builder-menu-addnew-element-image-tag ng-hide">
                                            <!---->
                                        </div>
                                        <div class="builder-menu-addnew-element-image-img">
                                            <!---->
                                        </div>
                                        <div class="builder-menu-addnew-element-image-button-use">
                                            <button class="ladiui btn btn-32 btn-primary" ng-click="clickUseImage($event)">Sử dụng</button>
                                        </div>

                                        <script type="text/javascript">
                                            (function() {
                                                var doc = document.querySelector('.builder-menu-addnew-element-image-img');
                                                LadiPage.runtime.tmp.observer5 = new ResizeObserver(function() {
                                                    doc.style.removeProperty('padding-right');
                                                    if (doc.scrollHeight != doc.clientHeight) {
                                                        doc.style.setProperty('padding-right', ((parseFloatLadiPage(getComputedStyle(doc).paddingRight) || 0) - LadiPage.runtime.scrollbar_size) + 'px');
                                                    }
                                                });
                                                LadiPage.runtime.tmp.observer5.observe(doc);
                                            })();
                                        </script>
                                    </div>
                                    <div data-element="gallery" menu-element-gallery="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-gallery" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Gallery</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="box" menu-element-box="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-box" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Hình hộp</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="form" menu-element-form="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-form" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Form</span>

                                            <!---->
                                        </div>
                                        <!---->
                                        <div id="assets-group-type-form-login" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Form Login</span>

                                            <!---->
                                        </div>
                                        <!---->
                                        <div id="assets-group-type-form-otp" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Form OTP</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="button" menu-element-button="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-button" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Nút bấm</span>

                                            <!---->
                                        </div>
                                        <!---->
                                        <div id="assets-group-type-button-group" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Nhóm nút bấm</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="headline" menu-element-headline="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-headline" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Tiêu đề</span>

                                            <!---->
                                        </div>
                                        <!---->
                                        <div id="assets-group-type-paragraph" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Đoạn văn</span>

                                            <!---->
                                        </div>
                                        <!---->
                                        <div id="assets-group-type-list-paragraph" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Danh sách</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="line" menu-element-line="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-line" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Đường kẻ</span>

                                            <!---->
                                        </div>
                                        <!---->

                                        <div id="assets-group-type-pen-tool" class="builder-menu-addnew-element-assets-group">
                                            <span>Pen Tool</span>

                                            <div ng-click="clickPenTool($event)" class="builder-menu-addnew-element-assets-pen-tool">
                                                <i class="builder-icon pen_tool background-secondary"></i>
                                                <span>Sử dụng Pen Tool</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div data-element="shape" menu-element-shape="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list element option-suggest-scroll">
                                        <div class="builder-menu-addnew-element-search shape">
                                            <input ng-keydown="$event.keyCode === 13 &amp;&amp; search()" ng-model="textSearch" class="ladiui form-control ng-pristine ng-untouched ng-valid ng-empty" type="text" placeholder="Tìm kiếm...">
                                            <i ng-click="search($event)" class="builder-icon search background-secondary tooltip">
        <span class="tooltiptext left" tooltiptext="Tìm kiếm"></span>
    </i>
                                        </div>

                                        <div class="builder-menu-addnew-element-scroll-shape">
                                            <!---->
                                            <div id="assets-group-type-shape-socials" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape socials" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Socials</span>

                                                <!---->
                                            </div>
                                            <!---->
                                            <div id="assets-group-type-shape-icons" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Icons</span>

                                                <!---->
                                            </div>
                                            <!---->
                                            <div id="assets-group-type-shape-material-icons" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Material Icons</span>

                                                <!---->
                                            </div>
                                            <!---->
                                            <div id="assets-group-type-shape-premium" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Premium</span>

                                                <!---->
                                            </div>
                                            <!---->
                                            <div id="assets-group-type-shape-arrows" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Arrows</span>

                                                <!---->
                                            </div>
                                            <!---->
                                            <div id="assets-group-type-shape-pattern" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Pattern</span>

                                                <!---->
                                            </div>
                                            <!---->
                                            <div id="assets-group-type-shape-background" ng-show="showTab(itemTab.type)" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group ng-hide shape" ng-repeat="itemTab in list_tab">
                                                <span ng-class="itemTab.classTitle" class="shape">Background</span>

                                                <!---->
                                            </div>
                                            <!---->
                                        </div>
                                    </div>
                                    <div data-element="video" menu-element-video="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-video" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Video</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="collection" menu-element-collection="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-collection" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Collection List</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="carousel" menu-element-carousel="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-carousel" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Carousel</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="frame" menu-element-frame="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-frame" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Frame</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="accordion" menu-element-accordion="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-accordion" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Accordion</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="table" menu-element-table="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-table" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Table</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="survey" menu-element-survey="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-survey" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Survey</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="menu" menu-element-menu="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-menu" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Menu</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="website" menu-element-website="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-pagination" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Pagination</span>

                                            <!---->
                                        </div>
                                        <!---->
                                        <div id="assets-group-type-search" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Tìm kiếm</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="html_code" menu-element-html-code="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-html-code" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Mã HTML</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                    <div data-element="tabs" menu-element-tabs="" class="builder-menu-addnew-element-content builder-menu-addnew-element-list new_element element option-suggest-scroll">
                                        <!---->
                                        <div id="assets-group-type-tabs" ng-class="itemTab.className" class="builder-menu-addnew-element-assets-group one-group" ng-repeat="itemTab in list_tab">
                                            <span ng-class="itemTab.classTitle">Tabs</span>

                                            <!---->
                                        </div>
                                        <!---->
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div ng-style="styleLayer()" id="builder-menu-layer" class="builder-menu-layer ng-hide" ng-show="showListLayer" style="top: 56px; left: 0px; height: calc(-56px + 100vh);">
                    <div class="builder-menu-layer-top">
                        <div class="builder-menu-layer-vertical-middle">
                            <span class="builder-menu-layer-title">Layer</span>
                            <span ng-click="clickLayerHelp($event)" class="builder-icon help builder-menu-layer-help tooltip">
                <span class="tooltiptext top" tooltiptext="Hướng dẫn"></span>
                            </span>

                            <i class="builder-icon close builder-menu-layer-close tooltip" ng-click="closeLayer($event)"></i>
                        </div>
                    </div>

                    <div class="builder-menu-layer-filter">
                        <input class="ladiui form-control" type="text" placeholder="Tìm kiếm...">
                        <i class="builder-icon search tooltip">
            <span class="tooltiptext top" tooltiptext="Tìm kiếm"></span>
        </i>
                    </div>

                    <div class="builder-menu-layer-content"></div>
                </div>

                <div ng-style="styleListLayoutSetting()" ng-show="showListLayoutSetting" class="ladiui list-layout-setting ng-hide" style="top: 56px; left: 0px; height: calc(-56px + 100vh);">
                    <div class="ladiui list-layout-setting-left">
                        <div class="ladiui list-page-setting-header">
                            <div class="ladiui flexbox center">
                                <div class="ladiui list-page-setting-header-title" translate="">Layout</div>
                                <div class="ladiui builder-icon icon-select-menu website help cursor-pointer mgl8"></div>
                            </div>
                        </div>

                        <div class="ladiui list-page-setting-main scroll">
                            <div>
                                <div class="ladiui flexbox space-between center mgt8">
                                    <label class="ladiui title-size12_500">HEADER</label>
                                    <label ng-click="clickToggleHeader($event)" class="ladiui switch website-custom cursor-pointer">
                        <input id="switch_layout_header" class="pointer-events-none" type="checkbox">
                        <span class="ladiui slider round pointer-events-none"></span>
                    </label>
                                </div>
                                <div ng-class="classLayoutHeader()" ng-click="clickLayoutHeader($event)" style="height: 80px;" class="ladiui builder-icon icon_layout_header mgt16 builder-menu-left-layout-item selected"></div>
                            </div>

                            <div>
                                <div class="ladiui title-size12_500 mgt24">BODY</div>
                                <div ng-class="classLayoutBody()" ng-click="clickLayoutBody($event)" style="height: 200px;" class="ladiui builder-icon icon_layout_body mgt16 builder-menu-left-layout-item"></div>
                            </div>

                            <div>
                                <div class="ladiui flexbox space-between center mgt24">
                                    <label class="ladiui title-size12_500">FOOTER</label>
                                    <label ng-click="clickToggleFooter($event)" class="ladiui switch website-custom cursor-pointer">
                        <input id="switch_layout_footer" class="pointer-events-none" type="checkbox">
                        <span class="ladiui slider round pointer-events-none"></span>
                    </label>
                                </div>
                                <div ng-class="classLayoutFooter()" ng-click="clickLayoutFooter($event)" style="height: 80px;" class="ladiui builder-icon icon_layout_footer mgt16 builder-menu-left-layout-item"></div>
                            </div>
                        </div>
                    </div>

                    <div class="ladiui list-layout-setting-right">
                        <div ng-style="styleAddNewHeader()" class="ladiui builder-menu-addnew-header custom-layout-list" style="height: 58px;">
                            <li class="selected" translate="">Thành phần</li>
                        </div>

                        <div class="ladiui flexbox space-between center mgt24">
                            <label class="ladiui title-size12_500 text-uppercase">Thành phần trong HEADER</label>
                            <!---->
                            <!----><span ng-if="!showAddNewWebsiteLayoutItem()" ng-click="editWebsiteLayoutItem($event)" class="builder-menu-addnew-content-header-right website-layout-addnew">
                <a translate="">Chọn mẫu khác</a>
            </span>
                            <!---->
                        </div>

                        <div class="builder-menu-component-element-thumb-sortable ui-sortable">
                            <!---->
                        </div>
                    </div>
                </div>

                <div ng-style="styleListPageSetting()" ng-show="showListPageSetting" class="ladiui list-page-setting ng-hide" style="top: 56px; left: 0px; height: calc(-56px + 100vh);">
                    <div class="ladiui list-page-setting-header flexbox center space-between">
                        <div class="ladiui flexbox center">
                            <div class="ladiui list-page-setting-header-title" translate="">Quản lý trang</div>
                            <div class="ladiui builder-icon icon-select-menu website help cursor-pointer mgl8"></div>
                        </div>
                        <div ng-click="closePageSetting($event)" class="ladiui builder-icon icon-close website page-manager cursor-pointer"></div>
                    </div>

                    <div class="ladiui list-page-setting-main">
                        <div class="ladiui flexbox center space-between">
                            <div class="ladiui title-size12_500 color_secondary text-uppercase" translate="">Danh sách trang</div>
                            <div ng-click="clickAddNewWebsitePage($event)" class="ladiui flexbox center cursor-pointer">
                                <div class="ladiui builder-icon icon-add website page-manager mgr8"></div>
                                <div class="ladiui color-primary title-size14" translate="">Thêm</div>
                            </div>
                        </div>

                        <div class="ladiui builder-menu-addnew-element-search shape mgt16">
                            <input id="builder_menu_left_search_page" ng-keydown="$event.keyCode === 13 ? searchWebsitePage($event) : searchWebsitePageSearch($event)" class="ladiui form-control" type="text" placeholder="Tìm kiếm">
                            <i ng-click="searchWebsitePage($event)" class="builder-icon search background-secondary tooltip">
                <span class="tooltiptext left" tooltiptext="Tìm kiếm"></span>
            </i>
                        </div>

                        <div class="list-page-setting-box">
                            <!---->
                            <!---->
                            <div ng-if="listPageSettingMenuLeft.length == 0" class="pointer-events-none margin-top-10">
                                <a class="ladiui dropdown-item flexbox center" translate="">Không có dữ liệu</a>
                            </div>
                            <!---->
                        </div>
                    </div>
                </div>

                <div ng-show="!showAddNew" class="builder-shortcut-all-element parent-attr-move" style="top: 15vh; left: 8px;">
                    <div class="builder-shortcut-all-element-left">
                        <i ng-click="clickShortcutAllElementMove($event)" class="item builder-icon drag builder-attribute-move"></i>
                        <div class="div-line"></div>

                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="image" ng-class="item.icon" class="item builder-icon tooltip image">
            <span class="tooltiptext right" tooltiptext="Hình ảnh"></span>
        </i>
                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="headline" ng-class="item.icon" class="item builder-icon tooltip headline">
            <span class="tooltiptext right" tooltiptext="Tiêu đề"></span>
        </i>
                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="paragraph" ng-class="item.icon" class="item builder-icon tooltip paragraph">
            <span class="tooltiptext right" tooltiptext="Đoạn văn"></span>
        </i>
                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="button" ng-class="item.icon" class="item builder-icon tooltip button">
            <span class="tooltiptext right" tooltiptext="Nút bấm"></span>
        </i>
                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="box" ng-class="item.icon" class="item builder-icon tooltip box">
            <span class="tooltiptext right" tooltiptext="Hình hộp"></span>
        </i>
                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="shape" ng-class="item.icon" class="item builder-icon tooltip shape">
            <span class="tooltiptext right" tooltiptext="Biểu tượng"></span>
        </i>
                        <!----><i ng-repeat="item in listShortcutMenuPrimary" ng-click="clickShortcutAllElement(item, $event)" data-element="video" ng-class="item.icon" class="item builder-icon tooltip video">
            <span class="tooltiptext right" tooltiptext="Video"></span>
        </i>
                        <!---->

                        <!----><i ng-if="!is_editor_banner" ng-click="clickShortcutAllElementLoadMore($event)" class="item builder-icon add_circle tooltip">
            <span class="tooltiptext right" tooltiptext="Xem thêm"></span>
        </i>
                        <!---->
                    </div>

                    <div ng-show="showShortcutAllElementRight" class="builder-shortcut-all-element-right ng-hide">
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="gallery" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon gallery" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Gallery</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="table" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon table" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Table</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="button_group" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon button_group" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Nhóm nút bấm</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="survey" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon survey" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Survey</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="list_paragraph" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon list_paragraph" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Danh sách</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="html_code" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon html_code" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Mã HTML</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="line" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon line" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Đường kẻ</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="frame" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon frame" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Frame</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="pen_tool" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon pen_tool" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Pen Tool</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="accordion" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon accordion" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Accordion</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="form" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon form" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Form</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="countdown" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon countdown" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Countdown</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="carousel" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon carousel" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Carousel</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="notify" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon notify" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Notify</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="collection" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon collection" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Collection List</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="spinlucky" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon spinlucky" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Spin Lucky</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="tabs" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon tabs" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Tabs</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="review" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon review" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Review</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="menu" class="item">
                            <!----><i ng-if="!item.is_empty" class="builder-icon menu" ng-class="item.icon"></i>
                            <!---->
                            <!----><span ng-if="!item.is_empty">Menu</span>
                            <!---->
                        </div>
                        <!---->
                        <div ng-repeat="item in listShortcutMenuAll" ng-click="clickShortcutAllElement(item, $event)" ng-class="item.className" data-element="" class="item pointer-events-none">
                            <!---->
                            <!---->
                        </div>
                        <!---->
                    </div>
                </div>

                <div class="builder-menu-left" ng-style="getStyle()" style="width: 0px; height: calc(-56px + 100vh); overflow: hidden;"></div>

                <script type="text/javascript">
                    (function() {
                        function getCurrentScope(callback) {
                            if (isEmptyLadiPage(LadiPage.runtime.current_scope.left_menu)) {
                                LadiPageScript.runTimeout(function() {
                                    getCurrentScope(callback);
                                }, 100);

                                return;
                            }

                            callback(LadiPage.runtime.current_scope.left_menu);
                        }

                        getCurrentScope(function(scope) {
                            scope.list_observer = [];

                            var run = function(doc) {
                                var observer = new ResizeObserver(function() {
                                    doc.style.removeProperty('padding-right');
                                    if (doc.scrollHeight != doc.clientHeight) {
                                        doc.style.setProperty('padding-right', ((parseFloatLadiPage(getComputedStyle(doc).paddingRight) || 0) - LadiPage.runtime.scrollbar_size) + 'px');
                                    }
                                });
                                observer.observe(doc);

                                scope.list_observer.push(observer);
                            };

                            var run2 = function(doc) {
                                var observer = new ResizeObserver(function() {
                                    doc.classList.remove('scroll');
                                    if (doc.scrollHeight != doc.clientHeight) {
                                        doc.classList.add('scroll');
                                    }
                                });
                                observer.observe(doc);

                                scope.list_observer.push(observer);
                            };

                            var list = document.querySelectorAll('.builder-menu-addnew-content, .builder-menu-addnew-element-list');
                            for (var i = 0; i < list.length; i++) {
                                run(list[i]);
                            }

                            list = document.getElementsByClassName('builder-menu-addnew-element-tag');
                            for (i = 0; i < list.length; i++) {
                                run2(list[i]);
                            }
                        });

                        var dom = document.getElementsByClassName('list-page-setting-box')[0];
                        dom.addEventListener('scroll', function(e) {
                            dom.style.setProperty('--scroll-top', -e.target.scrollTop + 'px');
                        });
                    })();
                </script>
            </div>
            <div ng-style="getStyleBuilderEditor()" id="builder-editor" class="builder-editor" style="height: calc(-56px + 100vh); width: 100%;">
                <div id="builder-mouse-hold" class="builder-mouse-hold ladi-hidden"></div>
                <div id="builder-group-tmp" data-id="GROUP_TMP" class="builder-group-tmp ladi-hidden">
                    <div class="ladi-resize ladi-n-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-s-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-w-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-e-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-ne-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-nw-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-se-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                    <div class="ladi-resize ladi-sw-resize">
                        <div class="ladi-resize-display"></div>
                    </div>
                </div>

                <div id="builder-container" class="builder-container ladi-wraper" style="">
                    <div id="SECTION2" class="ladi-section" style="height: 1295px;">
                        <div style="background-color: rgb(0, 0, 0);" class="ladi-section-background"></div>
                        <div class="ladi-overlay"></div>
                        <div class="ladi-container">
                            <div id="HEADLINE4" style="width: 200px;top: 922px;left: 111.5px;" class="ladi-element">
                                <h2 class="ladi-headline" style="color: rgb(0, 0, 0); font-size: 18px; font-family: &quot;Open Sans&quot;, sans-serif; text-align: left; line-height: 1.2;">Tiêu đề</h2>
                            </div>
                            <div id="PARAGRAPH5" style="width: 280px;top: 35px;left: 100px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(255, 255, 255); font-size: 48px; font-family: Roboto, sans-serif; font-weight: bold; font-style: italic; text-align: left; line-height: 0.8125;">XTRAZEX</div>
                            </div>
                            <div id="GROUP71" style="width: 377px;height: 146px;top: 183px;left: 22.25px;" class="ladi-element">
                                <div class="ladi-group">
                                    <div id="IMAGE6" style="width: 371.5px;height: 139.227px;top: 6px;left: 2px;" class="ladi-element">
                                        <div class="ladi-image">
                                            <div class="ladi-image-background" style="width: 371.5px;height: 139.227px;top: 0px;left: 0px;background-image: url(&quot;https://w.ladicdn.com/s768x768/5cde7318b0dd200c08bed297/xuat-tinh-som-1559126418.jpg&quot;);"></div>
                                            <div class="ladi-overlay"></div>
                                        </div>
                                    </div>
                                    <div id="PARAGRAPH13" style="width: 280px;top: 16px;left: 17px;" class="ladi-element">
                                        <div class="ladi-paragraph" style="color: rgb(0, 0, 0); font-size: 13px; font-family: &quot;Open Sans&quot;, sans-serif; text-align: left; line-height: 1.4;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;</div>
                                    </div>
                                    <div id="IMAGE44" style="width: 377px;height: 146px;top: 0px;left: 0px;" class="ladi-element">
                                        <div class="ladi-image">
                                            <div class="ladi-image-background" style="width: 377px;height: 146px;top: 0px;left: 0px;background-image: url(&quot;https://w.ladicdn.com/5cde7318b0dd200c08bed297/50177908_596130730859235_3426453045356003328_n-1559132463.gif&quot;);"></div>
                                            <div class="ladi-overlay"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div id="PARAGRAPH7" style="width: 280px;top: 111px;left: 242px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(255, 255, 255); font-size: 13px; font-family: Roboto, sans-serif; font-weight: bold; font-style: italic; text-align: left; line-height: 1.4;"><span style="color: rgb(255, 255, 255);">Tăng 6 cm trong một tuần.</span><br style="color: rgb(255, 255, 255);">&nbsp; &nbsp; &nbsp;Đảm bảo kết quả 100%!<br style="color: rgb(255, 255, 255);">&nbsp; &nbsp; &nbsp; &nbsp;
                                    &nbsp;</div>
                            </div>
                            <div id="BOX8" style="width: 90.875px;height: 86px;top: 104px;left: 34px;" class="ladi-element">
                                <div class="ladi-box" style="box-shadow: 0px 0px 34px 0px rgba(0,0,0,1); -webkit-box-shadow: 0px 0px 34px 0px rgba(0,0,0,1); background-color: rgb(224, 0, 0); border-style: dotted; border-color: rgb(0, 0, 0); border-width: 3px; border-radius: 40px;">
                                    <div class="ladi-overlay"></div>
                                </div>
                            </div>
                            <div id="PARAGRAPH9" style="width: 280px;top: 204.5px;left: 70px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(0, 0, 0); font-size: 13px; font-family: &quot;Open Sans&quot;, sans-serif; text-align: left; line-height: 1.4;">+6cm tro</div>
                            </div>
                            <div id="PARAGRAPH11" style="width: 264px;top: 109px;left: 47px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(255, 255, 255); font-size: 22px; font-family: Roboto, sans-serif; font-weight: bold; text-align: left; line-height: 1.2;">&nbsp;+6cm<br>&nbsp; &nbsp;&nbsp;</div>
                            </div>
                            <div id="PARAGRAPH15" style="width: 280px;top: 137.5px;left: 30px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(255, 255, 255); font-size: 14px; font-family: Roboto, sans-serif; font-weight: bold; text-align: left; line-height: 1.4;">&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;trong<br>&nbsp; &nbsp; &nbsp; &nbsp;một tuần<br>&nbsp;</div>
                            </div>
                            <div id="IMAGE17" style="width: 375px;height: 202px;top: 330px;left: 23.5px;" class="ladi-element">
                                <div class="ladi-image">
                                    <div class="ladi-image-background" style="width: 375px;height: 202px;top: 0px;left: 0px;background-image: url(&quot;https://w.ladicdn.com/s768x768/5cde7318b0dd200c08bed297/4-1559127802.png&quot;);"></div>
                                    <div class="ladi-overlay"></div>
                                </div>
                            </div>
                            <div id="BUTTON21" data-hidden="true" style="width: 139px;height: 40px;top: 791px;left: 198.5px;" class="ladi-element">
                                <div class="ladi-button" style="border-radius: 28px 0px;">
                                    <div class="ladi-button-background" style="background-color: rgb(255, 235, 59);"></div>
                                    <div class="ladi-overlay"></div>
                                    <div id="BUTTON_TEXT21" style="width: 139px;top: 3.5px;left: 0px;" class="ladi-element ladi-button-headline">
                                        <p class="ladi-headline" style="color: rgb(239, 13, 13); font-size: 33px; font-weight: bold; font-style: italic; text-align: center; line-height: 1;"> -50%</p>
                                    </div>
                                </div>
                            </div>
                            <div id="PARAGRAPH22" data-hidden="true" style="width: 280px;top: 839px;left: 215.5px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(255, 255, 255); font-size: 17px; font-family: Roboto, sans-serif; font-weight: bold; text-align: left; line-height: 1.2;">GIÁ GIẢM<br>&nbsp; &nbsp;<br>&nbsp; &nbsp;&nbsp;</div>
                            </div>
                            <div id="PARAGRAPH23" data-hidden="true" style="width: 280px;top: 871px;left: 218px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(0, 255, 102); font-size: 29px; font-family: &quot;Open Sans&quot;, sans-serif; font-weight: bold; font-style: italic; text-align: left; line-height: 1; text-shadow: rgb(0, 0, 0) 26px 0px 50px;">590000đ</div>
                            </div>
                            <div id="IMAGE24" data-hidden="true" style="width: 189px;height: 178px;top: 786px;left: 22px;" class="ladi-element">
                                <div class="ladi-image">
                                    <div class="ladi-image-background" style="width: 189px;height: 178px;top: 0px;left: 0px;background-image: url(&quot;https://w.ladicdn.com/s768x768/5cde7318b0dd200c08bed297/hammer-of-thor-oil-in-pakistan-1559128493.jpg&quot;);"></div>
                                    <div class="ladi-overlay"></div>
                                </div>
                            </div>
                            <div id="LINE25" style="width: 28px;top: 906px;left: 51.5px;" class="ladi-element">
                                <div class="ladi-line" style="width: 100%;padding: 8px 0px;">
                                    <div class="ladi-line-container" style="border-top: 5px solid rgb(255, 235, 59); border-right: 5px solid rgb(255, 235, 59); border-bottom: 5px solid rgb(255, 235, 59); border-left: 0px !important;"></div>
                                </div>
                            </div>
                            <div id="LINE26" style="height: 81px;top: 834px;left: 370.807px;" class="ladi-element">
                                <div class="ladi-line" style="height: 100%;padding: 0px 8px;">
                                    <div class="ladi-line-container" style="border-top: 0px !important; border-right: 4px solid rgb(255, 235, 59); border-bottom: 4px solid rgb(255, 235, 59); border-left: 4px solid rgb(255, 235, 59);"></div>
                                </div>
                            </div>
                            <div id="LINE27" style="width: 29px;top: 825px;left: 351px;" class="ladi-element">
                                <div class="ladi-line" style="width: 100%;padding: 8px 0px;">
                                    <div class="ladi-line-container" style="border-top: 5px solid rgb(255, 235, 59); border-right: 5px solid rgb(255, 235, 59); border-bottom: 5px solid rgb(255, 235, 59); border-left: 0px !important;"></div>
                                </div>
                            </div>
                            <div id="PARAGRAPH28" style="width: 280px;top: 825px;left: 100px;" class="ladi-element">
                                <div class="ladi-paragraph" style="color: rgb(255, 235, 59); font-size: 18px; font-family: Roboto, sans-serif; font-weight: bold; text-align: left; line-height: 1.2;">KẾT THÚC GIẢM GIÁ TRONG</div>
                            </div>
                            <div id="LINE29" style="width: 26px;top: 825px;left: 51.5px;" class="ladi-element">
                                <div class="ladi-line" style="width: 100%;padding: 8px 0px;">
                                    <div class="ladi-line-container" style="border-top: 5px solid rgb(255, 235, 59); border-right: 5px solid rgb(255, 235, 59); border-bottom: 5px solid rgb(255, 235, 59); border-left: 0px !important;"></div>
                                </div>
                            </div>
                            <div id="LINE30" style="height: 83px;top: 834px;left: 43.5px;" class="ladi-element">
                                <div class="ladi-line" style="height: 100%;padding: 0px 8px;">
                                    <div class="ladi-line-container" style="border-top: 0px !important; border-right: 5px solid rgb(255, 235, 59); border-bottom: 5px solid rgb(255, 235, 59); border-left: 5px solid rgb(255, 235, 59);"></div>
                                </div>
                            </div>
                            <div id="LINE31" style="width: 28px;top: 904px;left: 351px;" class="ladi-element">
                                <div class="ladi-line" style="width: 100%;padding: 8px 0px;">
                                    <div class="ladi-line-container" style="border-top: 5px solid rgb(255, 235, 59); border-right: 5px solid rgb(255, 235, 59); border-bottom: 5px solid rgb(255, 235, 59); border-left: 0px !important;"></div>
                                </div>
                            </div>
                            <div id="COUNTDOWN32" style="width: 325.614px;height: 58px;top: 845.5px;left: 51.5px;" class="ladi-element">
                                <div class="ladi-countdown" style="color: rgb(252, 3, 3); font-size: 40px; font-family: &quot;Open Sans&quot;, sans-serif; font-weight: bold; text-align: center;">
                                    <div id="COUNTDOWN_ITEM26" class="ladi-element">
                                        <div class="ladi-countdown-background"></div>
                                        <div class="ladi-countdown-text"><span>00</span></div>
                                    </div>
                                    <div id="COUNTDOWN_ITEM27" class="ladi-element">
                                        <div class="ladi-countdown-background"></div>
                                        <div class="ladi-countdown-text"><span>03</span></div>
                                    </div>
                                    <div id="COUNTDOWN_ITEM28" class="ladi-element">
                                        <div class="ladi-countdown-background"></div>
                                        <div class="ladi-countdown-text"><span>16</span></div>
                                    </div>
                                    <div id="COUNTDOWN_ITEM29" class="ladi-element">
                                        <div class="ladi-countdown-background"></div>
                                        <div class="ladi-countdown-text"><span>00</span></div>
                                    </div>
                                </div>
                            </div>
                            <div id="FORM33" data-form-caption="false" data-input-label="false" data-config-id="5cee6e13d062e8345a244193" style="width: 301px;height: 262px;top: 954px;left: 60px;" class="ladi-element">
                                <form autocomplete="off" method="post" class="ladi-form" style="color: rgb(0, 0, 0); font-size: 13px; line-height: 1;">
                                    <div id="FORM_ITEM34" style="width: 300px;height: 36px;top: 0px;left: 0px;" class="ladi-element">
                                        <div class="ladi-form-item-container">
                                            <div class="ladi-form-item-background"></div>
                                            <div class="ladi-form-item"><input autocomplete="off" tabindex="1" name="name" class="ladi-form-control" type="text" placeholder="Họ và tên" disabled="" value=""></div>
                                        </div>
                                    </div>
                                    <div id="FORM_ITEM35" data-hidden="true" style="width: 300px;height: 36px;top: 0px;left: 0px;" class="ladi-element">
                                        <div class="ladi-form-item-container">
                                            <div class="ladi-form-item-background"></div>
                                            <div class="ladi-form-item"><input autocomplete="off" tabindex="2" name="email" class="ladi-form-control" type="email" placeholder="Nhập Email" disabled="" value=""></div>
                                        </div>
                                    </div>
                                    <div id="FORM_ITEM36" style="width: 300px;height: 36px;top: 51px;left: 1px;" class="ladi-element">
                                        <div class="ladi-form-item-container">
                                            <div class="ladi-form-item-background"></div>
                                            <div class="ladi-form-item"><input autocomplete="off" tabindex="3" name="phone" class="ladi-form-control" type="tel" placeholder="Nhập Số điện thoại" pattern="[0-9]{9,12}" disabled="" value=""></div>
                                        </div>
                                    </div>
                                    <div id="FORM_ITEM37" style="width: 300px;height: 100px;top: 97px;left: 1px;" class="ladi-element">
                                        <div class="ladi-form-item-container">
                                            <div class="ladi-form-item-background"></div>
                                            <div class="ladi-form-item"><textarea autocomplete="off" tabindex="4" name="message" class="ladi-form-control" placeholder="Địa chỉ nhận hàng và thời gian tiện nghe máy" disabled=""></textarea></div>
                                        </div>
                                    </div>
                                    <div id="BUTTON38" style="width: 276px;height: 40px;top: 222px;left: 11px;" class="ladi-element">
                                        <div class="ladi-button" style="border-radius: 51px;">
                                            <div class="ladi-button-background" style="background-color: rgb(255, 0, 0);"></div>
                                            <div class="ladi-overlay"></div>
                                            <div id="BUTTON_TEXT38" style="width: 276px;top: 6px;left: 0px;" class="ladi-element ladi-button-headline">
                                                <p class="ladi-headline" style="color: rgb(255, 255, 255); font-size: 14px; text-align: center; line-height: 2;">ĐẶT HÀNG</p>
                                            </div>
                                        </div>
                                    </div><button type="submit" class="ladi-hidden"></button></form>
                            </div>
                            <div id="IMAGE70" style="width: 375px;height: 273px;top: 537px;left: 20.5px;" class="ladi-element">
                                <div class="ladi-image">
                                    <div class="ladi-image-background" style="width: 375px;height: 273px;top: 0px;left: 0px;background-image: url(&quot;https://w.ladicdn.com/s768x768/5cde7318b0dd200c08bed297/6738d6888e1a6b44320b-1559560724.jpg&quot;);"></div>
                                    <div class="ladi-overlay"></div>
                                </div>
                            </div>
                        </div>
                        <div onclick="LadiPage.clickOtherSectionGlobal()" class="editing-section-global-overlay"></div>
                    </div>
                    <div id="SECTION_POPUP" class="ladi-section" style="height: 0px;">
                        <div class="ladi-section-background"></div>
                        <div class="ladi-overlay"></div>
                        <div class="ladi-container">
                            <div id="POPUP45" style="width: 375px;height: 500px;top: 56px;left: 0px;right: 4px;bottom: 0px;margin: auto;" class="ladi-element">
                                <div class="ladi-popup">
                                    <div class="ladi-popup-background" style="background-color: rgb(255, 255, 255);"></div>
                                    <div style="background-size: cover; background-attachment: scroll; background-origin: content-box; background-image: url(&quot;https://w.ladicdn.com/s768x768/57b167c9ca57d39c18a1c57c/home_insurance_about_bg-598402.jpg&quot;); background-position: center top; background-repeat: no-repeat;"
                                        class="ladi-overlay"></div>
                                    <div id="PARAGRAPH54" style="width: 341px;top: 70px;left: 24.5px;" class="ladi-element">
                                        <div class="ladi-paragraph" style="color: rgb(47, 161, 120); font-size: 16px; font-family: &quot;Roboto Slab&quot;, serif; font-weight: bold; text-align: center; line-height: 1.2;">Sau khi đăng ký, chuyên gia sinh lý sẽ gọi điện tư vấn chi tiết liệu trình phù với với từng cơ địa</div>
                                    </div>
                                    <div id="HEADLINE51" style="width: 389px;top: 31.5px;left: 58px;" class="ladi-element">
                                        <h1 class="ladi-headline" style="color: rgb(59, 103, 168); font-size: 22px; font-family: &quot;Roboto Slab&quot;, serif; font-weight: bold; text-align: left; line-height: 1.2;">ĐĂNG KÍ NHẬN KHUYẾN MÃI</h1>
                                    </div>
                                    <div id="SHAPE53" style="width: 43px;height: 43px;top: 20px;left: 13.5px;" class="ladi-element">
                                        <div class="ladi-shape"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100%" height="100%" viewBox="0 0 24 24" fill="rgba(47,161,120,1)"> <path d="M12,19.2C9.5,19.2 7.29,17.92 6,16C6.03,14 10,12.9 12,12.9C14,12.9 17.97,14 18,16C16.71,17.92 14.5,19.2 12,19.2M12,5A3,3 0 0,1 15,8A3,3 0 0,1 12,11A3,3 0 0,1 9,8A3,3 0 0,1 12,5M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12C22,6.47 17.5,2 12,2Z"></path> </svg></div>
                                    </div>
                                    <div id="FORM46" data-form-caption="false" data-input-label="false" data-config-id="5cee7cbcd062e8345a244514" style="width: 335px;height: 351.984px;top: 144px;left: 19.5px;" class="ladi-element">
                                        <form autocomplete="off" method="post" class="ladi-form" style="color: rgb(0, 0, 0); font-size: 14px; line-height: 1;">
                                            <div id="FORM_ITEM47" style="width: 334px;height: 43.1875px;top: 0px;left: 0.5px;" class="ladi-element">
                                                <div class="ladi-form-item-container">
                                                    <div class="ladi-form-item-background"></div>
                                                    <div class="ladi-form-item"><input autocomplete="off" tabindex="1" name="name" class="ladi-form-control" type="text" placeholder="Họ và tên" disabled="" value=""></div>
                                                </div>
                                            </div>
                                            <div id="FORM_ITEM49" style="width: 334px;height: 43.1875px;top: 56.1956px;left: 0.5px;" class="ladi-element">
                                                <div class="ladi-form-item-container">
                                                    <div class="ladi-form-item-background"></div>
                                                    <div class="ladi-form-item"><input autocomplete="off" tabindex="2" name="phone" class="ladi-form-control" type="tel" placeholder="Nhập Số điện thoại" pattern="[0-9]{9,12}" disabled="" value=""></div>
                                                </div>
                                            </div>
                                            <div id="FORM_ITEM55" style="width: 335px;height: 180px;top: 107.497px;left: 0px;" class="ladi-element">
                                                <div class="ladi-form-item-container">
                                                    <div class="ladi-form-item-background"></div>
                                                    <div class="ladi-form-item"><textarea autocomplete="off" tabindex="3" name="message" class="ladi-form-control" placeholder="Tình trạng bệnh lý" disabled=""></textarea></div>
                                                </div>
                                            </div>
                                            <div id="FORM_ITEM57" style="width: 256px;height: 36px;top: 312.5px;left: 71px;" class="ladi-element">
                                                <div class="ladi-form-item-container">
                                                    <div class="ladi-form-item-background"></div>
                                                    <div class="ladi-form-item"><input autocomplete="off" tabindex="4" name="email" class="ladi-form-control" type="email" placeholder="Nhập Email" disabled="" value=""></div>
                                                </div>
                                            </div>
                                            <div id="BUTTON50" style="width: 335px;height: 40px;top: 311.984px;left: 0px;" class="ladi-element">
                                                <div class="ladi-button" style="border-radius: 37px;">
                                                    <div class="ladi-button-background" style="background-color: rgb(251, 29, 29);"></div>
                                                    <div class="ladi-overlay"></div>
                                                    <div id="BUTTON_TEXT50" style="width: 335px;top: 6px;left: 0px;" class="ladi-element ladi-button-headline">
                                                        <p class="ladi-headline" style="color: rgb(255, 255, 255); font-size: 14px; font-family: &quot;Open Sans&quot;, sans-serif; font-weight: bold; text-align: center; line-height: 2;">ĐẶT HÀNG</p>
                                                    </div>
                                                </div>
                                            </div><button type="submit" class="ladi-hidden"></button></form>
                                    </div>
                                </div>
                            </div>
                            <div id="POPUP_OTP" style="width: 320px;height: 240px;top: 56px;left: 0px;right: 4px;bottom: 0px;margin: auto;" class="ladi-element">
                                <div class="ladi-popup">
                                    <div class="ladi-popup-background" style="background-color: rgb(255, 255, 255);"></div>
                                    <div class="ladi-overlay"></div>
                                    <div id="FORM_OTP_DEFAULT" data-form-caption="true" data-input-label="true" data-config-id="6316beb4f88f1f5b6595e6c3" style="width: 270px;height: 182px;top: 29px;left: 25px;" class="ladi-element">
                                        <form autocomplete="off" method="post" class="ladi-form" style="color: rgb(0, 0, 0); font-size: 12px; line-height: 1.6;">
                                            <div id="BUTTON72" style="width: 270px;height: 40px;top: 142px;left: 0px;" class="ladi-element">
                                                <div class="ladi-button">
                                                    <div class="ladi-button-background" style="background-color: rgb(0, 0, 0);"></div>
                                                    <div class="ladi-overlay"></div>
                                                    <div id="BUTTON_TEXT72" style="width: 270px;top: 9px;left: 0px;" class="ladi-element ladi-button-headline">
                                                        <p class="ladi-headline" style="color: rgb(241, 243, 244); font-size: 14px; font-weight: bold; text-align: center; line-height: 1.6;">Xác nhận OTP</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div id="FORM_ITEM72" style="width: 270px;height: 35px;top: 94.5px;left: 0px;" class="ladi-element">
                                                <div class="ladi-form-item-container">
                                                    <div class="ladi-form-item-background"></div>
                                                    <div class="ladi-form-item"><input autocomplete="off" tabindex="1" name="otp" class="ladi-form-control ladi-form-otp" type="number" placeholder="Nhập mã OTP" disabled=""></div>
                                                </div>
                                                <div id="FORM_ITEM_LABEL72" style="width: 270px;top: -47px;left: 0px;" class="ladi-element ladi-input-label">
                                                    <p class="ladi-headline" style="font-size: 12px; text-align: left; line-height: 1.6;">Nhập mã OTP được gửi đến số điện thoại của bạn để xác nhận.</p>
                                                </div>
                                            </div>
                                            <div id="HEADLINE73" style="width: 270px;top: 0px;left: 0px;" class="ladi-element ladi-form-caption">
                                                <h3 class="ladi-headline" style="color: rgb(0, 0, 0); font-size: 18px; font-weight: bold; text-align: center; line-height: 1.6;">Vui lòng xác nhận OTP</h3>
                                            </div><button type="submit" class="ladi-hidden"></button></form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div onclick="LadiPage.clickOtherSectionGlobal()" class="editing-section-global-overlay"></div>
                    </div>
                </div>
                <div ng-show="!isNoSection" class="builder-container-padding" style="height: 300px; margin-top: -300px;"></div>
                <div id="builder-preview" class="ladi-hidden"></div>

                <!---->

                <div ng-show="isNoSection" ng-click="addNewSection($event)" class="builder-button-no-section ng-hide">Thêm mới Section</div>

                <div id="builder-rotate-text" class="builder-rotate-text ladi-hidden"></div>
                <div class="builder-rotate-doc ladi-hidden" id="builder-rotate-doc">
                    <i class="ladi-rotate-icon builder-icon transform_rotate background-black"></i>
                </div>

                <div id="backdrop-popup" class="backdrop-popup"></div>
                <div id="lightbox-screen" class="lightbox-screen"></div>
                <div id="builder-snap-grid" class="builder-grid ladi-hidden"></div>

                <!---->
                <div ui-view="quick-editor">
                    <div id="builder-quick-editor" data-element-id="" class="builder-quick-editor option-suggest-scroll ng-hide" ng-show="hasSelectedElement">
                        <div ng-bind-html="getListId() | convertHtml" class="builder-quick-editor-list-id"></div>

                        <ul>
                            <!---->
                            <li class="builder-quick-editor-border"></li>

                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->

                            <li class="builder-quick-editor-border"></li>

                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <!---->
                            <li class="builder-quick-editor-border"></li>

                            <li ng-click="clickAttribute($event)" class="tooltip">
                                <i class="builder-icon setting_outline"></i>
                                <span class="tooltiptext top" tooltiptext="Thiết lập"></span>
                            </li>
                            <!---->
                            <!---->
                        </ul>

                        <div ng-show="showAddNew" class="menu-left-open ng-hide"></div>
                    </div>
                </div>
                <!---->
                <div ui-view="section-editor">
                    <div id="builder-section-editor" data-section-id="" class="builder-section-editor ng-hide" ng-show="hasSelectedSection">
                        <ul>
                            <li class="builder-icon setting_outline tooltip" ng-click="clickAttribute($event)">
                                <span class="tooltiptext right" tooltiptext="Thiết lập"></span>
                            </li>
                            <li class="builder-icon help tooltip" ng-click="clickSectionDocument($event)">
                                <span class="tooltiptext right" tooltiptext="Hướng dẫn"></span>
                            </li>
                            <!---->
                            <!---->
                            <li ng-if="!isSectionGlobal" class="builder-icon save tooltip" ng-click="saveSection($event)">
                                <span class="tooltiptext right" tooltiptext="Lưu Section"></span>
                            </li>
                            <!---->
                            <!---->
                            <!---->
                            <li class="builder-icon up tooltip" ng-click="upIndexSection($event)">
                                <span class="tooltiptext right" tooltiptext="Lên trên (CTRL + ⬆)"></span>
                            </li>
                            <li class="builder-icon down tooltip" ng-click="downIndexSection($event)">
                                <span class="tooltiptext right" tooltiptext="Xuống dưới (CTRL + ⬇)"></span>
                            </li>
                            <!---->
                            <!---->
                            <li class="builder-icon duplicate tooltip" ng-click="duplicateSection($event)">
                                <span class="tooltiptext right" tooltiptext="Nhân bản (CTRL + D)"></span>
                            </li>
                            <!---->
                            <li ng-if="showSortMobile() &amp;&amp; (!isSectionGlobal || isEditSection)" class="builder-icon sort_mobile tooltip" ng-click="sortMobileSection($event)">
                                <span class="tooltiptext right" tooltiptext="Tự động sắp xếp Mobile"></span>
                            </li>
                            <!---->
                            <li class="builder-icon delete background-danger tooltip" ng-click="deleteSection($event)">
                                <span class="tooltiptext right" tooltiptext="Xoá (DEL)"></span>
                            </li>
                        </ul>

                        <div ng-show="showAddNew" class="menu-left-open ng-hide"></div>
                    </div>
                </div>

                <div id="builder-snap-top" class="builder-snap ladi-hidden"></div>
                <div id="builder-snap-left" class="builder-snap ladi-hidden"></div>
                <div id="builder-snap-bottom" class="builder-snap builder-snap-height ladi-hidden"><span class="builder-snap-pixel"></span></div>
                <div id="builder-snap-right" class="builder-snap builder-snap-width ladi-hidden"><span class="builder-snap-pixel"></span></div>
            </div>
            <!---->
            <div ui-view="right-menu">
                <div class="ladi-hidden builder-menu-navigation builder-menu">
                    <ul>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-publish"></i>
                                <span>Xuất bản</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-preview"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Xem trước
</span>
                                    <!---->
                                    <!---->
                                    <!----><span ng-if="hasShortcut" class="builder-menu-shortcut">CTRL + P</span>
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-publish"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Xuất bản
</span>
                                    <!---->
                                    <!---->
                                    <!----><span ng-if="hasShortcut" class="builder-menu-shortcut">CTRL + Shift + P</span>
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-cloud-download"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Lưu
</span>
                                    <!---->
                                    <!---->
                                    <!----><span ng-if="hasShortcut" class="builder-menu-shortcut">CTRL + S</span>
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-history"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Lịch sử chỉnh sửa
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-pc"></i>
                                <span>Desktop</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-undo"></i>
                                <span>Undo</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-undo"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Undo
</span>
                                    <!---->
                                    <!---->
                                    <!----><span ng-if="hasShortcut" class="builder-menu-shortcut">CTRL + Z</span>
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-redo"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Redo
</span>
                                    <!---->
                                    <!---->
                                    <!----><span ng-if="hasShortcut" class="builder-menu-shortcut">CTRL + Shift + Z</span>
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-settings"></i>
                                <span>Thiết lập</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-refresh"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Tự động sắp xếp Mobile
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-logo-facebook"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    SEO &amp; Social
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-html"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Mã chuyển đổi
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-html"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Mã JavaScript/CSS
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="website-generate"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Chung
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="website-seo"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    SEO
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="share-page"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Chia sẻ mạng xã hội
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-optimize-page"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Tối ưu hoá trang
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-dynamic-content"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Dynamic Content
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-fonts"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Quản lý Font
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-fonts"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Quản lý nội dung
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-page-setting"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Thiết lập toàn trang
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-grid-view"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Bật/Tắt Grid (Ctrl + ')
</span>
                                    <!---->
                                    <!---->
                                    <!----><span ng-if="hasShortcut" class="builder-menu-shortcut">CTRL + '</span>
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click has-builder-menu-child">
                                <i ng-class="item.iconClassName" class="icon-chat-support"></i>
                                <span>LiveChat</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-chat-support"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    LiveChat với chúng tôi
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-blog"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Tài liệu hướng dẫn
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-hot-key"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Phím tắt
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-logo-facebook"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Cộng đồng LadiPage
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                                <li ng-click="clickChild($event)" ng-class="child.classChild" data-name="" menu-item-child="" ng-repeat="child in item.childs">
                                    <!----><i ng-if="!isShowIconImage()" ng-class="child.className" class="icon-c-warning"></i>
                                    <!---->
                                    <!---->
                                    <!----><span ng-style="child.styleSpan" ng-class="child.classSpan" ng-if="!child.isBold" data-tabs-id="">
    Yêu cầu tính năng
</span>
                                    <!---->
                                    <!---->
                                    <!---->
                                </li>
                                <!---->
                            </ul>
                        </li>
                        <!---->
                    </ul>
                </div>

                <div class="builder-menu-right" ng-style="getStyle()" style="width: 0px; height: calc(-56px + 100vh); overflow: hidden;"></div>
            </div>
            <!---->
            <div ui-view="preview-menu" class="ladi-hidden">
                <div class="ladi-hidden builder-menu-navigation builder-menu">
                    <ul>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-pc"></i>
                                <span>Desktop</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-mobile"></i>
                                <span>Mobile</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                        <li ng-click="clickItem($event)" menu-item="" ng-repeat="item in listMenu">
                            <div ng-class="classItem()" class="builder-menu-click">
                                <i ng-class="item.iconClassName" class="icon-back-arrow"></i>
                                <span>Quay lại</span>
                            </div>
                            <ul ng-class="classChild()" class="builder-menu-child">
                                <!---->
                            </ul>
                        </li>
                        <!---->
                    </ul>
                </div>
            </div>
            <!---->
            <div ui-view="bottom-menu">
                <div class="builder-menu-bottom" ng-style="getStyle()" style="height: 0px; overflow: hidden;"></div>
            </div>

            <!---->
            <div ui-view="attribute-editor">
                <div ng-class="classUserAttributeFixed()" id="builder-attribute-editor" data-setting-image-quick-design="false" data-button-edit="false" ng-style="styleAttributeEditor()" data-element-id="&amp;nbsp;" data-setting-tab="" class="builder-attribute-editor hide attr parent-attr-move fixed ng-hide"
                    ng-show="(isUserShowAttribute || isUserShowAttributeFixed) &amp;&amp; !isUserAttributeFixedHidden" style="top: 143.6px; left: calc(100% - 296px); right: 0px; height: calc(-56px + 100vh);">
                    <div class="builder-attribute-editor-box" data-setting-align-group="false" data-parent-type="" data-menu-parent-popup="false" data-element-type="">
                        <i ng-show="isUserShowAttributeFixed" class="builder-icon background-mute drag builder-attribute-move"></i>

                        <div ng-style="styleTextAttributeId()" class="builder-attribute-element-id attr">
                            <a>
                                <p class="display-inline-block" ng-bind-html="getCurrentElementId() | convertHtml">&nbsp;</p>
                                <i ng-show="showEditElementId()" ng-click="clickEditElementId($event)" class="builder-icon edit edit-id ng-hide"></i>
                            </a>
                        </div>

                        <i ng-click="clickAttributeFixedToggle($event)" ng-style="styleIconAttributeFixed()" class="builder-icon full_screen builder-menu-attribute-close attr" style="right: 38px;"></i>
                        <i ng-click="clickCloseAttributeFixed($event)" ng-show="isUserShowAttributeFixed" class="builder-icon close builder-menu-attribute-close attr"></i>

                        <div class="builder-attribute-tab">
                            <ul>
                                <!---->
                            </ul>
                        </div>

                        <!---->

                        <!---->

                        <!---->

                        <div ng-show="!showSettingButtonShape() || (!isButtonTabShape &amp;&amp; isButtonUseShape())" class="builder-attribute-content content-attr option-suggest-scroll">
                            <!---->
                        </div>

                        <!---->

                        <div ng-show="showAddNew" class="menu-left-open ng-hide"></div>
                    </div>
                </div>
            </div>
            <!---->
            <div ui-view="link-editor">
                <div class="builder-editor-backdrop ng-hide" ng-show="showLink" ng-click="closeLinkEditor($event)"></div>
                <div id="builder-link-editor" style="width: 400px;" class="builder-link-editor ng-hide" ng-show="showLink">
                    <i class="builder-icon background-mute drag builder-attribute-move"></i>
                    <i class="builder-icon close builder-menu-editor-close" ng-click="closeLinkEditor($event)"></i>
                    <div class="builder-attribute-element-title" translate="">Chèn liên kết</div>

                    <div class="builder-link-editor-content">
                        <div class="builder-modal-input">
                            <div class="builder-modal-input-label">
                                <label translate="">Liên kết</label>
                            </div>
                            <input ng-input="true" class="ladiui form-control ng-pristine ng-untouched ng-valid ng-empty" type="text" ng-change="updateLink(true)" ng-model="link" id="builder-input-link-text" placeholder="Nhập liên kết">
                        </div>

                        <div class="builder-modal-input-option-search">
                            <div class="builder-modal-input-option-search-label builder-modal-input-option-search-label-bold">
                                <label translate="">Mở liên kết trên</label>
                            </div>

                            <div class="builder-modal-input-option-search-content">
                                <div class="builder-modal-input-option-search-option ladiui select-search dropdown">
                                    <button style="max-width: initial;" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown" data-toggle="dropdown">
                        <span class="ladiui dropdown-text">Cửa sổ mới</span>
                    </button>
                                    <ul style="width: 370px;" class="builder-modal-input-option-search-option-list ladiui dropdown-menu">
                                        <li ng-click="changeTargetTop($event)"><span class="ladiui dropdown-item" translate="">Trang hiện tại</span></li>
                                        <li ng-click="changeTargetBlank($event)"><span class="ladiui dropdown-item" translate="">Cửa sổ mới</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="builder-modal-input">
                            <div class="builder-modal-input-label">
                                <label translate="">Nofollow</label>
                            </div>

                            <div class="builder-modal-input-radio">
                                <label class="ladiui span-text">
                    <input ng-model="nofollow" ng-value="true" ng-click="changeNofollowOpen($event)" type="radio" class="ladiui form-check-input one ng-pristine ng-untouched ng-valid ng-not-empty" name="nofollow" value="true">
                    <span translate="">Bật</span>
                </label>
                                <label class="ladiui span-text">
                    <input ng-model="nofollow" ng-value="false" ng-click="changeNofollowClose($event)" type="radio" class="ladiui form-check-input one ng-pristine ng-untouched ng-valid ng-not-empty" name="nofollow" value="false">
                    <span translate="">Tắt</span>
                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---->
            <div ui-view="color-editor">
                <div class="builder-editor-backdrop ng-hide" ng-show="showColor" ng-click="closeColorEditor($event)"></div>
                <div id="builder-color-editor" style="width: 336px;" class="builder-color-editor ng-hide" ng-show="showColor">
                    <i class="builder-icon background-mute drag builder-attribute-move"></i>
                    <i class="builder-icon close builder-menu-editor-close" ng-click="closeColorEditor($event)"></i>
                    <div class="builder-attribute-element-title" translate="">Chọn màu</div>

                    <div ng-show="isColor" id="builder-type-color-editor" class="ng-hide"></div>
                    <div ng-show="isColor" ng-class="classTypeColorDefault()" class="builder-type-color-default ng-hide">
                        <div ng-show="showMycolor" class="builder-type-color-default-box builder-type-color-default-box-bottom ng-hide">
                            <div class="builder-type-color-default-title" translate="">Màu của tôi</div>
                            <!---->
                        </div>

                        <div class="builder-type-color-default-box">
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(0, 0, 0);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(84, 84, 84);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(115, 115, 115);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(166, 166, 166);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(217, 217, 217);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 255, 255);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 22, 22);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 87, 87);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 102, 196);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(203, 108, 230);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(140, 82, 255);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(94, 23, 235);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(3, 152, 158);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(0, 194, 203);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(92, 225, 230);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(56, 182, 255);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(82, 113, 255);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(0, 74, 173);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(0, 128, 55);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(126, 217, 87);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(201, 226, 101);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 222, 89);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 189, 89);"></div>
                            <!---->
                            <div color-default-item-option="" ng-style="styleItem()" class="builder-type-color-default-option" ng-click="clickItem($event)" ng-repeat="option in list_color_default" style="background-color: rgb(255, 145, 77);"></div>
                            <!---->
                        </div>

                        <!---->
                    </div>

                    <div ng-show="isColorGradient" class="builder-color-angel ng-hide">
                        <label class="builder-color-angel-label" translate="">Toạ độ</label>
                        <div data-prefix="deg" class="builder-color-angel-value">
                            <input ng-input="true" type="number" min="0" ng-change="changeAngel()" data-key="style_color_angel" ng-model="valueAngel" id="builder-color-angel-input" class="ng-pristine ng-untouched ng-valid ng-empty ng-valid-min">
                        </div>
                    </div>
                    <div ng-show="isColorGradient" id="builder-type-color-gradient-editor-1" class="builder-type-color-gradient-editor-1 ng-hide"></div>
                    <div ng-show="isColorGradient" id="builder-type-color-gradient-editor-2" class="builder-type-color-gradient-editor-2 ng-hide"></div>
                </div>

                <script type="text/javascript">
                    (function() {
                        var div = document.querySelector('.builder-color-editor .builder-type-color-default');
                        LadiPage.runtime.tmp.observer6 = new ResizeObserver(function() {
                            div.style.removeProperty('padding-right');
                            if (div.scrollHeight != div.clientHeight) {
                                div.style.setProperty('padding-right', ((parseFloatLadiPage(getComputedStyle(div).paddingRight) || 0) - LadiPage.runtime.scrollbar_size) + 'px');
                            }
                        });
                        LadiPage.runtime.tmp.observer6.observe(div);
                    })();
                </script>
            </div>
            <!---->
            <div ui-view="emoji">
                <div class="builder-editor-backdrop ng-hide" ng-show="showEmoji" ng-click="closeEmoji($event)"></div>
                <div id="builder-emoji" style="width: 537px;" class="builder-emoji ng-hide" ng-show="showEmoji">
                    <i class="builder-icon background-mute drag builder-attribute-move"></i>
                    <i class="builder-icon close builder-menu-editor-close" ng-click="closeEmoji($event)"></i>
                    <div class="builder-attribute-element-title" translate="">Emoji &amp; Symbols</div>

                    <div class="ladi-overflow" style="height: 300px;">
                        <!---->
                    </div>
                </div>
            </div>
            <!---->
            <div ui-view="animated-editor">
                <div class="builder-editor-backdrop ng-hide" ng-show="showAnimated" ng-click="closeAnimatedEditor($event)"></div>
                <div id="builder-animated-editor" style="width: 400px;" class="builder-animated-editor ng-hide" ng-show="showAnimated">
                    <i class="builder-icon background-mute drag builder-attribute-move"></i>
                    <i class="builder-icon close builder-menu-editor-close" ng-click="closeAnimatedEditor($event)"></i>
                    <div class="builder-attribute-element-title" translate="">Chọn hiệu ứng</div>

                    <div class="builder-animated-editor-content">
                        <div class="builder-modal-input-option-search">
                            <div class="builder-modal-input-option-search-label builder-modal-input-option-search-label-bold">
                                <label translate="">Hiệu ứng</label>
                            </div>

                            <div class="builder-modal-input-option-search-content">
                                <div class="builder-modal-input-option-search-option ladiui select-search dropdown">
                                    <button style="max-width: initial;" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown" data-toggle="dropdown">
                        <span class="ladiui dropdown-text">clip</span>
                    </button>
                                    <ul style="width: 370px;" class="builder-modal-input-option-search-option-list ladiui dropdown-menu ladi-overflow">
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">rotate-1</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">rotate-2</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">rotate-3</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">type</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">scale</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">loading-bar</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">slide</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">clip</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">zoom</span></li>
                                        <!---->
                                        <li ng-click="clickType($event)" animated-option="" ng-repeat="type in listTextOption"><span class="ladiui dropdown-item">push</span></li>
                                        <!---->
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="builder-modal-input">
                            <div class="builder-modal-input-label">
                                <label translate="">Chữ hiển thị</label>
                            </div>
                            <textarea id="builder-animated-list-text" class="builder-modal-input-textarea ng-pristine ng-untouched ng-valid ng-empty" ng-blur="updateAnimated(true)" ng-model="listText" placeholder="Mỗi giá trị là 1 dòng, ví dụ bên dưới:

LadiPage
Landing Page"></textarea>
                        </div>
                    </div>

                    <div class="builder-modal-footer">
                        <button ng-click="done($event)" type="button" translate="">Xong</button>
                    </div>
                </div>
            </div>
            <!---->
            <div ui-view="body-editor">
                <div ng-class="classUserAttributeFixed()" data-count-shortcut="5" id="builder-body-editor" ng-style="styleBodyEditor()" class="builder-attribute-editor body fixed ng-hide" ng-show="!showAttributeEditor &amp;&amp; (isUserShowAttribute || isUserShowAttributeFixed) &amp;&amp; !isUserAttributeFixedHidden"
                    style="top: 143.6px; left: calc(100% - 296px); right: 0px; height: calc(-56px + 100vh);">
                    <i ng-show="isUserShowAttributeFixed" class="builder-icon background-mute drag builder-attribute-move"></i>

                    <div ng-style="styleTextAttributeId()" class="builder-attribute-element-id">
                        <!----><span ng-if="is_body_editor_website === false">Thiết lập toàn trang</span>
                        <!---->
                        <!---->
                    </div>

                    <i ng-click="clickAttributeFixedToggle($event)" ng-style="styleIconAttributeFixed()" class="builder-icon full_screen builder-menu-attribute-close" style="right: 38px;"></i>
                    <i ng-click="clickCloseAttributeFixed($event)" ng-show="isUserShowAttributeFixed" class="builder-icon close builder-menu-attribute-close"></i>

                    <ul ng-show="isShowShortcutPageSetting()" class="builder-shortcut-setting-page">
                        <!---->
                        <li ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner &amp;&amp; !is_body_editor_popupx" ng-click="clickSettingSeo($event)"><i class="builder-icon facebook"></i><span>SEO &amp; Social</span></li>
                        <!---->
                        <!---->
                        <li ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner &amp;&amp; !is_body_editor_popupx" ng-click="clickCodePageConversion($event)"><i class="builder-icon html_code"></i><span>Mã chuyển đổi</span></li>
                        <!---->
                        <!---->
                        <li ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner" ng-click="clickCodePageCustom($event)"><i class="builder-icon javascript_css"></i><span>Mã JavaScript/CSS</span></li>
                        <!---->
                        <!---->
                        <li ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner" ng-click="clickOptimizePage($event)"><i class="builder-icon optimize_page"></i><span>Tối ưu hoá trang</span></li>
                        <!---->
                        <!---->
                        <!---->
                        <li ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner &amp;&amp; !is_body_editor_popupx" ng-click="clickDynamicContent($event)"><i class="builder-icon dynamic_content"></i><span>Dynamic Content</span></li>
                        <!---->
                    </ul>

                    <div class="builder-attribute-content option-suggest-scroll">
                        <div class="builder-attribute-group no-line">
                            <div class="builder-attribute-title">
                                <span>Thiết lập chung</span>
                                <span ng-click="clickBodyEditorHelp($event)" class="builder-icon help builder-menu-attribute-help tooltip">
                    <span class="tooltiptext right" tooltiptext="Hướng dẫn"></span>
                                </span>
                            </div>
                            <div class="builder-attribute-detail">
                                <div class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">Font chữ</label>
                                    <div class="builder-attribute-detail-value option-suggest">
                                        <div ng-click="toggleOptionFontDefault($event)" class="builder-attribute-detail-label-detail">
                                            <span ng-bind-html="labelFontDefault() | convertHtml"><label style="font-family: &quot;Open Sans&quot;, sans-serif;">Open Sans</label></span>
                                            <i class="builder-icon arrow_down"></i>
                                        </div>

                                        <ul ng-show="showOptionFontDefault" class="builder-attribute-detail-suggest option-suggest-search option-suggest-menu ng-hide">
                                            <li class="li-first">
                                                <input class="ladiui search-field form-control ng-pristine ng-untouched ng-valid ng-empty" ng-input="true" ng-model="searchFontText" type="text" placeholder="Tìm kiếm...">
                                                <i class="ladiui icon icon-search tooltip">
                                    <span class="tooltiptext right" tooltiptext="Tìm kiếm"></span>
                                </i>
                                            </li>
                                            <li class="li-scroll">
                                                <ul>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label>Chọn từ thư viện</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Open Sans&quot;, sans-serif;">Open Sans</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Roboto&quot;, sans-serif;">Roboto</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Roboto Slab&quot;, serif;">Roboto Slab</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Roboto Mono&quot;, monospace;">Roboto Mono</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Source Sans Pro&quot;, sans-serif;">Source Sans Pro</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Montserrat&quot;, sans-serif;">Montserrat</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Quicksand&quot;, sans-serif;">Quicksand</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Tinos&quot;, serif;">Tinos</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Oswald&quot;, sans-serif;">Oswald</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Muli&quot;, sans-serif;">Muli</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Mulish&quot;, sans-serif;">Mulish</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Sriracha&quot;, cursive;">Sriracha</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Philosopher&quot;, sans-serif;">Philosopher</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Niramit&quot;, sans-serif;">Niramit</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Paytone One&quot;, sans-serif;">Paytone One</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Jura&quot;, sans-serif;">Jura</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Judson&quot;, serif;">Judson</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Yeseva One&quot;, cursive;">Yeseva One</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Baloo Bhaina&quot;, cursive;">Baloo Bhaina</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Baloo Bhaina 2&quot;, cursive;">Baloo Bhaina 2</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Taviraj&quot;, serif;">Taviraj</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Prata&quot;, serif;">Prata</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Trirong&quot;, serif;">Trirong</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Lobster&quot;, cursive;">Lobster</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Itim&quot;, cursive;">Itim</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Chonburi&quot;, cursive;">Chonburi</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Arima&quot;, cursive;">Arima</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Bungee&quot;, cursive;">Bungee</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Bungee Inline&quot;, cursive;">Bungee Inline</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Bungee Outline&quot;, cursive;">Bungee Outline</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Bungee Shade&quot;, cursive;">Bungee Shade</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Cormorant Upright&quot;, serif;">Cormorant Upright</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Athiti&quot;, sans-serif;">Athiti</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Pattaya&quot;, sans-serif;">Pattaya</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Merriweather&quot;, serif;">Merriweather</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Hepta Slab&quot;, serif;">Hepta Slab</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Crimson Pro&quot;, serif;">Crimson Pro</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Playfair Display&quot;, serif;">Playfair Display</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Noto Serif&quot;, serif;">Noto Serif</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Dosis&quot;, sans-serif;">Dosis</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Anton&quot;, sans-serif;">Anton</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Josefin Sans&quot;, sans-serif;">Josefin Sans</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Dancing Script&quot;, cursive;">Dancing Script</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Exo&quot;, sans-serif;">Exo</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;EB Garamond&quot;, serif;">EB Garamond</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Play&quot;, sans-serif;">Play</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Maven Pro&quot;, sans-serif;">Maven Pro</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Barlow Condensed&quot;, sans-serif;">Barlow Condensed</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Alfa Slab One&quot;, cursive;">Alfa Slab One</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Rokkitt&quot;, serif;">Rokkitt</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Bahianita&quot;, cursive;">Bahianita</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;VT323&quot;, monospace;">VT323</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Literata&quot;, serif;">Literata</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;K2D&quot;, sans-serif;">K2D</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Thasadith&quot;, sans-serif;">Thasadith</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Shantell Sans&quot;, cursive;">Shantell Sans</label></span></li>
                                                    <!---->
                                                    <li body-font-default-option="" ng-click="clickItem($event)" ng-repeat="item in list_font_default | filter:searchFontFilter"><span ng-bind-html="labelFont() | convertHtml"><label style="font-family: &quot;Raleway&quot;, sans-serif;">Raleway</label></span></li>
                                                    <!---->
                                                </ul>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">Hướng văn bản</label>
                                    <div class="builder-attribute-detail-value option-suggest">
                                        <div ng-click="toggleOptionTextDirection($event)" class="builder-attribute-detail-label-detail">
                                            <span><label>Trái sang phải</label></span>
                                            <i class="builder-icon arrow_down"></i>
                                        </div>

                                        <ul ng-show="showOptionTextDirection" class="builder-attribute-detail-suggest option-suggest-menu ng-hide">
                                            <li ng-click="clickTextDirectionLeftToRight($event)"><span><label>Trái sang phải</label></span></li>
                                            <li ng-click="clickTextDirectionRightToLeft($event)"><span><label>Phải sang trái</label></span></li>
                                        </ul>
                                    </div>
                                </div>

                                <div class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">Thiết lập lại Font</label>
                                    <div ng-click="clickFontResetAll($event)" class="builder-attribute-detail-value builder-attribute-detail-button-select-image">
                                        <span>Trở về mặc định</span>
                                    </div>
                                </div>

                                <!---->
                                <div ng-if="!is_body_editor_banner" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label" ng-bind-html="::('element_form_reset_all' | translate) | convertHtml">Thiết lập lại<br>Cấu hình Form</label>
                                    <div ng-click="clickFormResetAll($event)" class="builder-attribute-detail-value builder-attribute-detail-button-select-image">
                                        <span>Trở về mặc định</span>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div data-setting="dynamic_form_data" ng-if="!is_body_editor_banner" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label" ng-bind-html="::('element_dynamic_form_data' | translate) | convertHtml">Dynamic Form Data</label>
                                    <div ng-click="clickDynamicFormData($event)" class="builder-attribute-detail-value builder-attribute-detail-button-select-image">
                                        <span>Thiết lập</span>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div ng-if="!is_body_editor_banner &amp;&amp; !is_body_editor_popupx" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label" ng-bind-html="::('element_body_background' | translate) | convertHtml">Màu &amp; Hình nền</label>
                                    <div ng-click="clickBodyBackground($event)" class="builder-attribute-detail-value builder-attribute-detail-button-select-image">
                                        <span>Thiết lập</span>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div ng-if="!isMobileOnly() &amp;&amp; !is_body_editor_banner &amp;&amp; (!is_adaptive_design || !is_adaptive_design_mobile)" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">K/thước Desktop</label>
                                    <div class="builder-attribute-detail-value option-suggest">
                                        <div ng-click="toggleOptionViewportDesktop($event)" class="builder-attribute-detail-label-detail">
                                            <span><label>960px</label></span>
                                            <i class="builder-icon arrow_down"></i>
                                        </div>

                                        <ul ng-show="showOptionViewportDesktop" class="builder-attribute-detail-suggest option-suggest-menu ng-hide">
                                            <li ng-click="clickViewportDesktop960($event)"><span><label>960px</label></span></li>
                                            <li ng-click="clickViewportDesktop1200($event)"><span><label>1200px</label></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div ng-if="!is_body_editor_banner &amp;&amp; (!is_adaptive_design || is_adaptive_design_mobile)" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">K/thước Mobile</label>
                                    <div class="builder-attribute-detail-value option-suggest">
                                        <div ng-click="toggleOptionViewportMobile($event)" class="builder-attribute-detail-label-detail">
                                            <span><label>420px</label></span>
                                            <i class="builder-icon arrow_down"></i>
                                        </div>

                                        <ul ng-show="showOptionViewportMobile" class="builder-attribute-detail-suggest option-suggest-menu ng-hide">
                                            <li ng-click="clickViewportMobile420($event)"><span><label>420px</label></span></li>
                                            <li ng-click="clickViewportMobile320($event)"><span><label>320px</label></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div ng-if="!is_body_editor_banner" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">Ngôn ngữ</label>
                                    <div class="builder-attribute-detail-value option-suggest">
                                        <div ng-click="toggleOptionLanguage($event)" class="builder-attribute-detail-label-detail">
                                            <span><label>Vietnamese</label></span>
                                            <i class="builder-icon arrow_down"></i>
                                        </div>

                                        <ul ng-show="showOptionLanguage" class="builder-attribute-detail-suggest option-suggest-menu ng-hide">
                                            <!---->
                                            <li ng-click="clickLanguage($event, item)" ng-repeat="item in listLanguage"><span><label>Vietnamese</label></span></li>
                                            <!---->
                                            <li ng-click="clickLanguage($event, item)" ng-repeat="item in listLanguage"><span><label>English</label></span></li>
                                            <!---->
                                            <li ng-click="clickLanguage($event, item)" ng-repeat="item in listLanguage"><span><label>Thai</label></span></li>
                                            <!---->
                                            <li ng-click="clickLanguage($event, item)" ng-repeat="item in listLanguage"><span><label>Indonesian</label></span></li>
                                            <!---->
                                            <li ng-click="clickLanguage($event, item)" ng-repeat="item in listLanguage"><span><label>Malay</label></span></li>
                                            <!---->
                                        </ul>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner &amp;&amp; !is_body_editor_popupx &amp;&amp; !is_adaptive_design" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">Mobile only</label>
                                    <div class="builder-attribute-detail-value text-right">
                                        <label ng-click="changeMobileOnly($event, null, true)" class="ladiui switch margin-top-5 margin-right-0">
                            <input class="pointer-events-none ng-pristine ng-untouched ng-valid ng-empty" ng-model="valueMobileOnly" type="checkbox">
                            <span class="ladiui slider round pointer-events-none"></span>
                        </label>
                                    </div>
                                </div>
                                <!---->

                                <!---->
                                <div ng-if="!is_body_editor_website &amp;&amp; !is_body_editor_banner &amp;&amp; !is_body_editor_popupx" class="builder-attribute-detail-item">
                                    <label class="builder-attribute-detail-label">Story Page</label>
                                    <div class="builder-attribute-detail-value option-suggest">
                                        <div ng-click="toggleOptionStoryPage($event)" class="builder-attribute-detail-label-detail">
                                            <span><label>Tắt</label></span>
                                            <i class="builder-icon arrow_down"></i>
                                        </div>

                                        <ul ng-show="showOptionStoryPage" class="builder-attribute-detail-suggest option-suggest-menu ng-hide">
                                            <li ng-click="clickStoryPageHorizontal($event)"><span><label>Chiều ngang</label></span></li>
                                            <li ng-click="clickStoryPageVertical($event)"><span><label>Chiều dọc</label></span></li>
                                            <li ng-click="clickStoryPageNone($event)"><span><label>Tắt</label></span></li>
                                        </ul>
                                    </div>
                                </div>
                                <!---->

                                <!---->

                                <!---->

                                <!---->
                            </div>
                        </div>
                    </div>

                    <div ng-show="showAddNew" class="menu-left-open ng-hide"></div>
                </div>
            </div>
            <!---->
            <div ui-view="one-setting-editor">
                <div style="top: 15vh; left: 100px;" id="builder-one-setting-editor" class="builder-attribute-editor ng-hide" ng-show="showAttribute">
                    <i ng-click="closeOneSettingEditor($event)" class="icon-e-remove builder-attribute-close"></i>
                    <div class="builder-attribute-element-id text-uppercase"></div>

                    <div class="builder-attribute-content">
                        <!---->

                        <!---->

                        <!---->

                        <!---->

                        <!---->

                        <!---->
                    </div>

                    <div ng-show="showAddNew" class="menu-left-open ng-hide"></div>
                </div>

                <script type="text/javascript">
                    function changeIsConfigCheckout(input) {
                        var scope = LadiPage.runtime.current_scope.one_setting_editor;
                        scope.is_config_checkout = !input.checked;
                        scope.updateValue('is_config_checkout', input.checked, null);
                    }

                    function changeConfigCheckoutId(input) {
                        var scope = LadiPage.runtime.current_scope.one_setting_editor;
                        scope.config_checkout_id = null;
                        scope.updateValue('config_checkout_id', input.value, null);
                    }
                </script>
            </div>
            <!---->
            <div ui-view="pen-tool-editor">
                <div class="builder-pen-tool-editor">
                    <ul>
                        <li class="builder-icon save tooltip" ng-click="clickDone($event)">
                            <span class="tooltiptext left" tooltiptext="Lưu lại (Enter)"></span>
                        </li>
                        <li class="builder-icon reload tooltip" ng-click="clickReset($event)">
                            <span class="tooltiptext left" tooltiptext="Làm lại"></span>
                        </li>
                        <li class="builder-icon delete background-danger tooltip" ng-click="clickClear($event)">
                            <span class="tooltiptext left" tooltiptext="Xoá trắng (DEL)"></span>
                        </li>
                        <li class="builder-icon undo tooltip" ng-click="clickCancel($event)">
                            <span class="tooltiptext left" tooltiptext="Huỷ bỏ (ESC)"></span>
                        </li>
                    </ul>
                </div>
            </div>
            <!---->
            <div ui-view="ai-content-editor">
                <div class="builder-editor-backdrop ng-hide" ng-show="showEditor" ng-click="closeEditor($event)"></div>
                <div id="builder-ai-content-editor" ng-style="styleModal()" class="builder-ai-content-editor ng-hide" ng-show="showEditor" style="width: 600px;">
                    <i class="builder-icon background-mute drag builder-attribute-move"></i>
                    <i class="builder-icon close builder-menu-editor-close" ng-click="closeEditor($event)"></i>
                    <i ng-show="showStep2()" class="builder-icon back background-default ng-hide" ng-click="backStep1($event)"></i>

                    <div class="builder-attribute-element-title">
                        <span translate="">Tạo nội dung bằng AI</span>
                        <b style="border-radius: 4px; padding: 0px 4px; background: #3C72F9; color: #fff; font-size: 12px; line-height: 16px; display: inline-flex; margin-left: 4px; position: relative; top: -2px;">Beta</b>
                    </div>

                    <div ng-show="showStep1()" class="builder-ai-content-editor-content">
                        <div class="builder-modal-input">
                            <div class="builder-modal-input-label">
                                <label translate="">Chủ đề bạn muốn viết</label>
                            </div>
                            <textarea style="height: 94px;" class="builder-modal-input-textarea" placeholder="Ví dụ: Giới thiệu cửa hàng quần áo"></textarea>
                        </div>

                        <div class="builder-modal-input-option-search">
                            <div class="builder-modal-input-option-search-label builder-modal-input-option-search-label-bold">
                                <label translate="">Loại văn bản</label>
                            </div>
                            <div class="builder-modal-input-option-search-content">
                                <div class="builder-modal-input-option-search-option ladiui select-search dropdown">
                                    <button style="max-width: initial;" class="ladiui btn btn-outline-light dropdown-toggle select-dropdown" data-toggle="dropdown">
                        <span class="ladiui dropdown-text">Tự động</span>
                    </button>
                                    <ul style="width: 552px;" class="builder-modal-input-option-search-option-list ladiui dropdown-menu ladi-overflow">
                                        <li ng-click="clickContentTypeAuto($event)"><span class="ladiui dropdown-item" translate="">Tự động</span></li>
                                        <li ng-click="clickContentTypeHeadline($event)"><span class="ladiui dropdown-item" translate="">Tiêu đề</span></li>
                                        <li ng-click="clickContentTypeParagraph($event)"><span class="ladiui dropdown-item" translate="">Đoạn văn</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div class="builder-modal-input-option-search">
                            <button style="width: 100%;" ng-click="generate($event)" type="button" class="ladiui btn btn-primary builder-btn-primary" translate="">Tạo nội dung</button>
                        </div>
                    </div>

                    <div ng-show="showStep2()" class="builder-ai-content-editor-content ng-hide">
                        <!---->
                        <button class="ladiui btn btn-outline-primary margin-top-30 builder-pull-right" ng-click="createNew($event)" translate="">Tạo nội dung mới</button>
                    </div>
                </div>
            </div>
        </div>
        <!---->
        <!---->
        <div ui-view="builder-loading">
            <div class="builder-loading ng-hide" ng-style="styleBuilderLoading()" ng-show="builderLoading || !builderTranslateLoaded" style="background-image: url(&quot;https://w.ladicdn.com/ladiui/icons/ladi-loading.svg&quot;);"></div>
        </div>
        <!---->
        <div ui-view="builder-loading-blur">
            <div class="builder-loading builder-loading-blur ng-hide" ng-style="styleBuilderLoadingBlur()" ng-show="builderLoadingBlur" style="background-image: url(&quot;https://w.ladicdn.com/ladiui/icons/ladi-loading.svg&quot;);"></div>
        </div>
        <!---->
        <!---->
        <div ng-if="builderTranslateLoaded" ng-show="!isBuilderModal" ui-view="check-browser">
            <!---->
        </div>
        <!---->

        <script type="text/javascript">
            (function() {
                var getConditionalCallback = function(selector, callback) {
                    return function(e) {
                        if (e.target && e.target.matches(selector)) {
                            e.delegatedTarget = e.target;
                            callback.apply(this, arguments);
                            return;
                        }
                        // Not clicked directly, check bubble path
                        var path = event.path || (event.composedPath && event.composedPath());
                        if (!path) return;
                        for (var i = 0; i < path.length; ++i) {
                            var el = path[i];
                            if (el.matches(selector)) {
                                // Call callback for all elements on the path that match the selector
                                e.delegatedTarget = el;
                                callback.apply(this, arguments);
                            }
                            // We reached parent node, stop
                            if (el === e.currentTarget) {
                                return;
                            }
                        }
                    };
                };
                var addDynamicEventListener = function(rootElement, eventType, selector, callback, options) {
                    rootElement.addEventListener(eventType, getConditionalCallback(selector, callback), options);
                };

                addDynamicEventListener(document.body, 'click', '.builder-modal-select-element', function(event) {
                    var target = event.target;
                    var scopeModal = LadiPage.runtime.current_scope.modal;
                    if (!isEmptyLadiPage(scopeModal)) {
                        scopeModal.uiModalCloseOk();
                    }

                    LadiPage.selectElementLayer(target.textContent);
                });
                addDynamicEventListener(document.body, 'click', '.builder-select-element', function(event) {
                    var target = event.target;
                    LadiPage.selectElement(target.textContent);
                });
            })();
        </script>
    </div>
    <script type="text/javascript" src="https://w.ladicdn.com/ladiui/ladiui.min.js?v=1710410831294"></script>
    <script type="text/javascript" src="https://w.ladicdn.com/v4/source/builder/js/editor.sdk.min.js?v=1710410831294"></script>
    <script type="text/javascript" src="https://w.ladicdn.com/v4/source/builder/js/builder.chunk.js?v=1710410831294"></script>
    <script type="text/javascript" id="">
        ! function(b, e, f, g, a, c, d) {
            b.fbq || (a = b.fbq = function() {
                a.callMethod ? a.callMethod.apply(a, arguments) : a.queue.push(arguments)
            }, b._fbq || (b._fbq = a), a.push = a, a.loaded = !0, a.version = "2.0", a.queue = [], c = e.createElement(f), c.async = !0, c.src = g, d = e.getElementsByTagName(f)[0], d.parentNode.insertBefore(c, d))
        }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
        fbq("init", "534321507144346");
        fbq("init", "1520656564722849");
        fbq("track", "PageView");
    </script>
    <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=534321507144346&amp;ev=PageView&amp;noscript=1"></noscript>

    <script type="text/javascript" id="" src="https://www.googletagmanager.com/gtag/js?id=UA-86097415-1"></script>
    <script type="text/javascript" id="" src="https://www.googletagmanager.com/gtag/js?id=AW-866447905"></script>
    <script type="text/javascript" id="" src="https://www.googletagmanager.com/gtag/js?id=AW-865252168"></script>
    <script type="text/javascript" id="">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments)
        }
        gtag("js", new Date);
        gtag("config", "UA-86097415-1");
    </script>

    <script type="text/javascript" id="">
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments)
        }
        gtag("js", new Date);
        gtag("config", "AW-866447905");
    </script>
    <iframe allow="join-ad-interest-group" data-tagging-id="AW-866447905" data-load-time="1710425852135" height="0" width="0" style="display: none; visibility: hidden;" src="https://td.doubleclick.net/td/rul/866447905?random=1710425852130&amp;cv=11&amp;fst=1710425852130&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be43b0v899189588za200&amp;gcd=13l3l3l3l1&amp;dma=0&amp;u_w=430&amp;u_h=932&amp;url=https%3A%2F%2Fbuilder.ladipage.com%2Feditor%2F5cee604ed062e8345a243b4b&amp;ref=https%3A%2F%2Fbuilder.ladipage.com%2F%3FLADI_CLIENT_ID%3D19221cd9-5079-428d-81d6-16704a18dabe&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=LadiPage%20Builder&amp;userId=replace%20with%20value&amp;npa=0&amp;pscdl=treatment_1.2&amp;auid=500067306.1709517278&amp;uamb=0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dpage_view"></iframe>
    <script
        type="text/javascript" id="">gtag("event","page_view",{send_to:"AW-866447905",user_id:"replace with value"});</script>
        <iframe allow="join-ad-interest-group" data-tagging-id="AW-865252168" data-load-time="1710425852185" height="0" width="0" style="display: none; visibility: hidden;" src="https://td.doubleclick.net/td/rul/865252168?random=1710425852177&amp;cv=11&amp;fst=1710425852177&amp;fmt=3&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45be43b0v888724000za200&amp;gcd=13l3l3l3l1&amp;dma=0&amp;u_w=430&amp;u_h=932&amp;url=https%3A%2F%2Fbuilder.ladipage.com%2Feditor%2F5cee604ed062e8345a243b4b&amp;ref=https%3A%2F%2Fbuilder.ladipage.com%2F%3FLADI_CLIENT_ID%3D19221cd9-5079-428d-81d6-16704a18dabe&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=LadiPage%20Builder&amp;npa=0&amp;pscdl=treatment_1.2&amp;auid=500067306.1709517278&amp;uamb=0&amp;uaw=0&amp;fledge=1&amp;data=event%3Dgtag.config"></iframe>
        <script
            type="text/javascript" id="">window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date);gtag("config","AW-865252168");</script>

            <div class="ladi-hidden" style="color: undefined"></div>
</body>
<chatgpt-sidebar data-gpts-theme="light"></chatgpt-sidebar>
<chatgpt-sidebar-popups data-gpts-theme="light"></chatgpt-sidebar-popups>

</html>