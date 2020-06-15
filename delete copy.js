<body ng-controller="appCtrl" ng-class="{ 'test-window' : !!isTestWindow, 'hide-scroll' : opts.hideParentScroll, 'rtl': opts.direction == 'rtl', 'msb-bg': opts.browserLock , 'hide-scroll' : isScrollStop}" data-gr-c-s-loaded="true" class="ng-scope test-window">








    <!-- ngIf: !isTestWindow -->

<!-- uiView:  --><div ui-view="" data-ng-init="opts={&quot;direction&quot;:&quot;ltr&quot;,&quot;key&quot;:&quot;13mkwaoyrk&quot;,&quot;testName&quot;:&quot;Assessment for Full Stack Developer&quot;,&quot;mode&quot;:&quot;test&quot;,&quot;companyName&quot;:&quot;Eli Lilly BLR&quot;,&quot;language&quot;:&quot;English&quot;,&quot;browserName&quot;:&quot;chrome&quot;,&quot;browserVersion&quot;:&quot;81.0.4044.138&quot;,&quot;os&quot;:&quot;linux&quot;,&quot;osBit&quot;:&quot;64&quot;,&quot;redirectUrl&quot;:&quot;/&quot;,&quot;isMobileDevice&quot;:false,&quot;candidateEmailId&quot;:&quot;sindhuanurag2@gmail.com&quot;,&quot;candidateContextData&quot;:null,&quot;allowSampleTest&quot;:false,&quot;sampleTestUrl&quot;:null,&quot;audioDiagnosticFileCount&quot;:5,&quot;videoDiagnosticFileCount&quot;:3,&quot;hasLonganswerTypeQuestion&quot;:false,&quot;clientCompositionRestrictedBrowser&quot;:false,&quot;wirisPluginEanbled&quot;:false,&quot;fileUploadEnabledInLongAnswer&quot;:false,&quot;candidatePrivateInviteKey&quot;:&quot;Z6/zNHz+KVBI+nPQhJtPWf20+QXdukBwI5/pNgGy8Z9nhL4wiJkAPA5R2dm44Ri8&quot;,&quot;assessmentId&quot;:372790,&quot;clientId&quot;:120884,&quot;isSupervised&quot;:false,&quot;waitToResume&quot;:false,&quot;isDuplicate&quot;:false,&quot;isInProgress&quot;:false,&quot;visualProctoring&quot;:false,&quot;isWebProctored&quot;:false,&quot;proctoringSettings&quot;:{&quot;recording&quot;:false,&quot;audioProctoring&quot;:false,&quot;audioProctoringToleranceLimit&quot;:2,&quot;authorization&quot;:false,&quot;screenCapture&quot;:false,&quot;audioOptional&quot;:true},&quot;onAppletFallback&quot;:false,&quot;hideAppletFallbackWarning&quot;:false,&quot;blurLimit&quot;:0,&quot;isPractiseTest&quot;:false,&quot;isApi&quot;:false,&quot;hasStartedTest&quot;:false,&quot;hasCompletedTest&quot;:false,&quot;isSystemCheck&quot;:false,&quot;checkSuspiciousSoftwares&quot;:true,&quot;effectivePrimarySupportNumber&quot;:&quot;+1-650-924-9221&quot;,&quot;effectiveSecondarySupportNumber&quot;:&quot;+91-82878-03040&quot;,&quot;isOTPProtected&quot;:false,&quot;browserLock&quot;:false,&quot;isCandidateCRFPrefilled&quot;:false,&quot;otpSent&quot;:false,&quot;apiCandidateCrfs&quot;:null,&quot;hasRLanguageQuestion&quot;:false,&quot;hasMeanStackQuestion&quot;:false,&quot;hasWebSocketBasedSimulatorQuestion&quot;:false,&quot;isTaskBasedTest&quot;:false,&quot;originalTestName&quot;:&quot;Assessment for Full Stack Developer&quot;,&quot;mediaQuestionType&quot;:&quot;NONE&quot;,&quot;mediaFileUploadingLimit&quot;:null,&quot;checkInternetInterval&quot;:null,&quot;checkInternetIntervalEndTest&quot;:null,&quot;autoChatPopup&quot;:false,&quot;ck&quot;:null}" id="test-window" class="ng-scope" aria-hidden="false">








        <div id="notification-wrapper" class="ng-scope" style="overflow: hidden; display: none;">
            <p i18-text="" i18-tag="TEST_MSG_HURRY_UP" class="ng-isolate-scope">Hurry up, the test is about to finish.</p>
        </div>

        <div id="slidemenu" class="visible-xs visible-sm pull-left " data-spy="affix" data-offset-top="10">
            <div class="slideMenu">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="logo"><img ng-src="//static.mettl.com/resources/images/mettl_beta.png" alt="" src="//static.mettl.com/resources/images/mettl_beta.png"></div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-sm-5"><b>Assessment Name</b></div>
                        <div class="col-sm-7 ng-binding">Assessment for Full Stack Developer</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-5"><b>Candidate Name</b></div>
                        <div class="col-sm-7 ng-binding">Anurag</div>
                    </div>
                    <div class="row">
                        <div class="col-sm-5"><b i18-text="" i18-tag="TEST_SUPPORT" class="ng-isolate-scope">Support</b></div>
                        <div class="col-sm-7">
                            <input type="tel" tabindex="-1" readonly="readonly" class="_supportNumber supportNumber" value="+1-650-924-9221">
            </div>
                        </div>
                        <!-- ngIf: opts.effectiveSecondarySupportNumber --><div class="row ng-scope" ng-if="opts.effectiveSecondarySupportNumber">
                            <div class="col-sm-7 col-sm-offset-5">
                                <input tabindex="-1" type="tel" readonly="readonly" class="_supportNumber supportNumber" value="+91-82878-03040">
            </div>
                            </div><!-- end ngIf: opts.effectiveSecondarySupportNumber -->
    </div>
                    </div>

                    <div class="navbar navbar-default" role="navigation" id="slide-nav" ng-show="showHeader">
                        <div class="container-fluid">
                            <div class="row">
                                <div class="col-md-3 hidden-sm hidden-xs"><div class="logo"><img ng-src="//static.mettl.com/resources/images/mettl_beta.png" alt="" src="//static.mettl.com/resources/images/mettl_beta.png"></div></div>
                                    <div class="col-md-4 text-center hidden-sm hidden-xs">
                                        <div class="assessment-name _assessment-name">
                                            <strong title="Assessment for Full Stack Developer" class="ng-binding">Assessment for Full Stack Developer &nbsp;</strong>
                                            <!-- ngIf: !testWindow.IsQuestionPreview --><i aria-label="Show Test Instructions" ng-if="!testWindow.IsQuestionPreview" ng-click="showTestInstructions()" class="glyphicon glyphicon-info-sign icon-gray ng-scope"></i><!-- end ngIf: !testWindow.IsQuestionPreview -->
                </div>
                                    </div>
                                    <div class="col-md-5">

                                        <a class="navbar-toggle pull-left " ng-click="(isNavVisible=!isNavVisible);$event.stopPropagation()">
                                            <span class="sr-only">Toggle navigation</span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                            <span class="icon-bar"></span>
                                        </a>

                                        <div ng-style="{'max-width': ''+'110'+'px'}" class="inline visible-tabMobile _ddlSectionSelector ddlSectionSelector" style="max-width: 110px;">
                                            <select ng-change="changeSection(selectedSection.Index)" ng-click="sectionSelectorClicked()" ng-options="section as section.Title for section in testWindow.Assessment.Sections" ng-model="selectedSection" class="form-control inline"><option value="0" selected="selected" label="Coding Simulator">Coding Simulator</option><option value="1" label="JavaScript">JavaScript</option><option value="2" label="NodeJS">NodeJS</option><option value="3" label="ExpressJS">ExpressJS</option><option value="4" label="GIT">GIT</option><option value="5" label="AWS">AWS</option></select>
                                            <div class="hidden-xs _section-name">
                                                <strong i18-text="" i18-tag="TEST_HDR_CURR_SECT_MSG_1" class="ng-isolate-scope">Section</strong>&nbsp;<strong class="_current-section ng-binding">2</strong> <span i18-text="" i18-tag="TEST_HDR_CURR_SECT_MSG_2" class="ng-isolate-scope">of</span>
                                                <span class="_section-count ng-binding">6 </span>
                                            </div>
                                        </div>
                                        <span class="glyphicon glyphicon-info-sign hidden-lg hidden-md hidden-sm inline icon-gray _sectionInstruction sectionInstruction " ng-click="showInstructionForSmDevice()"></span>

                                        <div class="pull-right _testHeaderTimeSection">
                                            <div ng-hide="testWindow.IsPracticeTest || testWindow.IsQuestionPreview" class="test-time pull-left _test-time">
                                                <i class="glyphicon glyphicon-time hidden-xs"></i>
                                                <div ng-class="{'only-test-time' : !sectionTimerEnabled}" class="sr-inline only-test-time">Total <!-- ngIf: testWindow.Demo && isTaskBasedTest --> <!-- ngIf: testWindow.Demo && !isTaskBasedTest --> <!-- ngIf: !testWindow.Demo --><div ng-if="!testWindow.Demo" class="_testTime sr-inline ng-scope stopwatch hasTickTock"><div class="hidden daysAnnotation inline"><span class="dd">00</span> Days Left</div> <div class="hoursAnnotation inline"><span class="hr">00</span>:<span class="min">02</span>:<span class="sec">02</span></div></div><!-- end ngIf: !testWindow.Demo --> </div>
                                                <hr ng-hide="!sectionTimerEnabled" class="ng-hide">
                                                    <span ng-hide="!sectionTimerEnabled" class="ng-hide"><span i18-text="" i18-tag="TEST_SECTION_TEXT" class="ng-isolate-scope">Section</span> <span class="_sectionTime stopwatch"><div class="hidden daysAnnotation inline"><span class="dd">00</span> Days Left</div> <div class="hoursAnnotation inline"><span class="hr">00</span>:<span class="min">00</span>:<span class="sec">00</span></div></span></span>
                    </div>

                                                <!-- ngIf: testWindow.IsPracticeTest -->

                    <!-- ngIf: !testWindow.IsQuestionPreview --><div class="visible-xs inline test-header pull-left ng-scope" ng-if="!testWindow.IsQuestionPreview">
                                                    <!-- ngIf: !testWindow.IsQuestionPreview --><button type="button" class="btn btn-link ng-scope" ng-if="!testWindow.IsQuestionPreview" ng-click="showTestInstructions()"><i class="glyphicon glyphicon-info-sign hidden-xs"></i></button><!-- end ngIf: !testWindow.IsQuestionPreview -->
                        <!-- ngIf: isTaskBasedTest -->
                        <!-- ngIf: !testWindow.IsPracticeTest && testWindow.FinishShow --><button type="button" class="btn btn-default ng-scope ng-isolate-scope" ng-if="!testWindow.IsPracticeTest &amp;&amp; testWindow.FinishShow" ng-click="askFinish()" ng-class="{'btn-primary': (isLastSection &amp;&amp; isLastQuestion) }" i18-text="" i18-tag="TEST_FINISH_TEST_TITLE_SM">FINISH</button><!-- end ngIf: !testWindow.IsPracticeTest && testWindow.FinishShow -->
                    </div><!-- end ngIf: !testWindow.IsQuestionPreview -->

                    <div class="inline test-header pull-left">
                                                    <!-- ngIf: isTaskBasedTest && !testWindow.Demo -->
                        <!-- ngIf: !testWindow.IsPracticeTest && testWindow.FinishShow --><button type="button" class="btn btn-default hidden-xs ng-scope ng-isolate-scope" ng-class="{'btn-primary': (isLastSection &amp;&amp; isLastQuestion) }" ng-if="!testWindow.IsPracticeTest &amp;&amp; testWindow.FinishShow" ng-click="askFinish()" i18-text="" i18-tag="TEST_FINISH_TEST_TITLE">Finish Test</button><!-- end ngIf: !testWindow.IsPracticeTest && testWindow.FinishShow -->
                        <!-- ngIf: !testWindow.FinishShow -->
                        <!-- ngIf: !testWindow.IsQuestionPreview && testWindow.FinishShow&& testWindow.IsPracticeTest -->
                        <!-- ngIf: !testWindow.IsQuestionPreview && testWindow.FinishShow&& testWindow.IsPracticeTest -->
                    </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div ng-hide="showHeader" class="show-mobile container-fluid outerWrapper ng-scope ng-hide">
                                <div ng-hide="testWindow.IsPracticeTest || testWindow.IsQuestionPreview" class="pull-right">
                                    <span ng-class="{'only-test-time' : !sectionTimerEnabled}" class="only-test-time">Total - <span ng-show="testWindow.Demo &amp;&amp; isTaskBasedTest" class="ng-hide">xx days left</span> <span ng-show="testWindow.Demo &amp;&amp; !isTaskBasedTest" class="_testTime ng-hide stopwatch hasTickTock"><div class="hidden daysAnnotation inline"><span class="dd">00</span> Days Left</div> <div class="hoursAnnotation inline"><span class="hr">00</span>:<span class="min">02</span>:<span class="sec">02</span></div></span> <span ng-show="!testWindow.Demo" class="_testTime stopwatch hasTickTock"><div class="hidden daysAnnotation inline"><span class="dd">00</span> Days Left</div> <div class="hoursAnnotation inline"><span class="hr">00</span>:<span class="min">02</span>:<span class="sec">02</span></div></span> </span>
                                    <span ng-hide="!sectionTimerEnabled" class="ng-hide"> <span class="">|</span> <span i18-text="" i18-tag="TEST_SECTION_TEXT" class="ng-isolate-scope">Section</span> - <span class="_sectionTime stopwatch"><div class="hidden daysAnnotation inline"><span class="dd">00</span> Days Left</div> <div class="hoursAnnotation inline"><span class="hr">00</span>:<span class="min">00</span>:<span class="sec">00</span></div></span></span>
                                </div>

                                <!-- ngIf: testWindow.IsPracticeTest -->
        <div class="toggleHeaderBtn show show-mobile _showBtn ng-hide" ng-show="!showHeader" ng-click="toggleTabHeader()">Show</div>
                            </div>

                            <!-- uiView: section --><div ui-view="section" class="ng-scope">
                                <div id="section-pane" class="container-fluid pagination-wrapper ">
                                    <div class="row">
                                        <div class="col-md-3 col-sm-9 col-xs-7 hidden-xs visible-600">
                                            <div class="inline hidden-xs _section-name">
                                                <strong i18-text="" i18-tag="TEST_HDR_CURR_SECT_MSG_1" class="ng-isolate-scope">Section</strong>&nbsp;<strong class="_current-section ng-binding">2</strong> <span i18-text="" i18-tag="TEST_HDR_CURR_SECT_MSG_2" class="ng-isolate-scope">of</span>
                                                <span class="_section-count ng-binding">6 </span>
                                            </div>
                                            <div ng-style="{'max-width': ''+'700'+'px'}" class="inline _ddlSectionSelector ddlSectionSelector" ng-hide="isFixedSectionOrder" style="max-width: 110px;">
                                                <select ng-change="changeSection(selectedSection.Index)" ng-click="sectionSelectorClicked()" ng-options="section as section.Title for section in testWindow.Assessment.Sections" ng-model="selectedSection" class="form-control inline _disableButton ng-pristine ng-valid" title="Section to attempt"><option value="0" label="Coding Simulator">Coding Simulator</option><option value="1" selected="selected" label="JavaScript">JavaScript</option><option value="2" label="NodeJS">NodeJS</option><option value="3" label="ExpressJS">ExpressJS</option><option value="4" label="GIT">GIT</option><option value="5" label="AWS">AWS</option></select>
                                            </div>
                                            <span class="glyphicon glyphicon-info-sign hidden-xs hidden-sm icon-gray _sectionInstruction ng-hide" ng-show="!!selectedSection.Instruction" ng-click="showCurrentSectionInstructions()"></span>
                                            <span class="glyphicon glyphicon-info-sign visible-xs visible-sm inline icon-gray _sectionInstruction" ng-click="showInstructionForSmDevice()"></span>
                                        </div>

                                        <div class="col-md-6 col-sm-5 hidden-xs hidden-sm text-right _carousel" carousel="">    <ul class="pagination">
                                            <!-- ngRepeat: item in section.Items --><!-- ngIf: isVisible(item.Index + 1) --><li ng-repeat="item in section.Items" ng-if="isVisible(item.Index + 1)" class="ng-scope">
                                                <!-- ngIf: !isMultipleQuestions --><a ng-click="openQuestion(item.Index + 1, true)" aria-label="Question 1" ng-if="!isMultipleQuestions" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding ng-scope attempted-item">
                                                    1
            </a><!-- end ngIf: !isMultipleQuestions -->
            <!-- ngIf: isMultipleQuestions -->
        </li><!-- end ngIf: isVisible(item.Index + 1) --><!-- end ngRepeat: item in section.Items --><!-- ngIf: isVisible(item.Index + 1) --><li ng-repeat="item in section.Items" ng-if="isVisible(item.Index + 1)" class="ng-scope">
                                                <!-- ngIf: !isMultipleQuestions --><a ng-click="openQuestion(item.Index + 1, true)" aria-label="Question 2" ng-if="!isMultipleQuestions" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding ng-scope attempted-item">
                                                    2
            </a><!-- end ngIf: !isMultipleQuestions -->
            <!-- ngIf: isMultipleQuestions -->
        </li><!-- end ngIf: isVisible(item.Index + 1) --><!-- end ngRepeat: item in section.Items --><!-- ngIf: isVisible(item.Index + 1) --><li ng-repeat="item in section.Items" ng-if="isVisible(item.Index + 1)" class="ng-scope">
                                                <!-- ngIf: !isMultipleQuestions --><a ng-click="openQuestion(item.Index + 1, true)" aria-label="Question 3" ng-if="!isMultipleQuestions" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding ng-scope attempted-item">
                                                    3
            </a><!-- end ngIf: !isMultipleQuestions -->
            <!-- ngIf: isMultipleQuestions -->
        </li><!-- end ngIf: isVisible(item.Index + 1) --><!-- end ngRepeat: item in section.Items --><!-- ngIf: isVisible(item.Index + 1) --><li ng-repeat="item in section.Items" ng-if="isVisible(item.Index + 1)" class="ng-scope">
                                                <!-- ngIf: !isMultipleQuestions --><a ng-click="openQuestion(item.Index + 1, true)" aria-label="Question 4" ng-if="!isMultipleQuestions" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding ng-scope attempted-item">
                                                    4
            </a><!-- end ngIf: !isMultipleQuestions -->
            <!-- ngIf: isMultipleQuestions -->
        </li><!-- end ngIf: isVisible(item.Index + 1) --><!-- end ngRepeat: item in section.Items --><!-- ngIf: isVisible(item.Index + 1) --><li ng-repeat="item in section.Items" ng-if="isVisible(item.Index + 1)" class="ng-scope">
                                                <!-- ngIf: !isMultipleQuestions --><a ng-click="openQuestion(item.Index + 1, true)" aria-label="Question 5" ng-if="!isMultipleQuestions" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding ng-scope attempted-item">
                                                    5
            </a><!-- end ngIf: !isMultipleQuestions -->
            <!-- ngIf: isMultipleQuestions -->
        </li><!-- end ngIf: isVisible(item.Index + 1) --><!-- end ngRepeat: item in section.Items --><!-- ngIf: isVisible(item.Index + 1) --><li ng-repeat="item in section.Items" ng-if="isVisible(item.Index + 1)" class="ng-scope">
                                                <!-- ngIf: !isMultipleQuestions --><a ng-click="openQuestion(item.Index + 1, true)" aria-label="Question 6" ng-if="!isMultipleQuestions" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding ng-scope active">
                                                    6
            </a><!-- end ngIf: !isMultipleQuestions -->
            <!-- ngIf: isMultipleQuestions -->
        </li><!-- end ngIf: isVisible(item.Index + 1) --><!-- end ngRepeat: item in section.Items -->
    </ul>

                                            <div class="btn-group vertical-top">
                                                <button type="button" class="btn btn-default btn-sm paginate-questions" aria-label="Previous Question" ng-disabled="isFirstPage" ng-click="slideBackward()" disabled="disabled"> &lt; </button>
                                                <button type="button" class="btn btn-default btn-sm ng-binding"><span class="_currentQuesCount ng-binding">6</span> of 6</button>
                                                <button type="button" class="btn btn-default btn-sm paginate-questions" aria-label="Next Question" ng-disabled="isLastPage" ng-click="slideForward()" disabled="disabled"> &gt; </button>
                                            </div>

                                        </div>

                                        <div ng-show="showHeader" class="col-md-3 col-sm-3 col-xs-4 paginationSection">
                                            <div class="pagination-filter _pagination-wrapper text-right" pagination-filter=""><div class="row hidden-xs hidden-sm">
                                                <div class="col-md-12 col-sm-10">
                                                    <div class="btn-group btn-group-full _pagination-buttons">
                                                        <button type="button" aria-label="All Questions" class="btn btn-default btn-sm all-button _all-button ng-isolate-scope" ng-click="changeFilter('all')" i18-text="" i18-title="{isMinQuestionTime : " "="" ?="" txt_all_ques}"="">
                <!-- ngIf: activeItem =='all' -->
                <span i18-text="" i18-tag="TXT_ALL" class="ng-isolate-scope">All</span>
            </button>
                                                    <!-- ngIf: attemptedCount != 0 --><button type="button" class="btn btn-success btn-sm ng-binding ng-scope ng-isolate-scope" ng-click="changeFilter('a')" aria-label="Attempted Question - 5" ng-if="attemptedCount != 0" i18-text="" i18-title="{isMinQuestionTime : " "="" ?="" txt_att_ques}"="" ng-style="{'width': attemptedCountWidth + 'px'}" style="width: 327.5px;">
                <!-- ngIf: activeItem =='a' -->
                5
            </button><!-- end ngIf: attemptedCount != 0 -->
            <!-- ngIf: revisitedCount != 0 -->
            <!-- ngIf: unAttemptedCount != 0 --><button type="button" class="btn btn-gray btn-sm ng-binding ng-scope ng-isolate-scope" aria-label="UnAttempted Question - 1" ng-click="changeFilter('u')" ng-if="unAttemptedCount != 0" i18-text="" i18-title="{isMinQuestionTime : " "="" ?="" txt_unatt_ques}"="" ng-style="{'width': unAttemptedCountWidth + 'px'}" style="width: 65.5px;">
                 <!-- ngIf: activeItem =='u' -->
                1
            </button><!-- end ngIf: unAttemptedCount != 0 -->
        </div>
                                        </div>
                                    </div>

                                    <div class="visible-xs visible-sm text-right">
                                        <div class="btn-group" ng-click="showQuestionForSM($event);">
                                            <button type="button" class="btn btn-success btn-sm ng-binding">5</button>
                                            <button type="button" class="btn btn-warning btn-sm ng-binding">0</button>
                                            <button type="button" class="btn btn-gray btn-sm ng-binding">1</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="container-fluid sm-pagination-area ">
                        <!-- ngIf: 1 < section.Items.length --><ul class="pagination ng-scope" ng-if="1 < section.Items.length">
                            <!-- ngRepeat: item in section.Items --><li ng-repeat="item in section.Items" class="ng-scope">
                                <a ng-click="openQuestion(item.Index + 1, true, $event)" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding attempted-item">
                                    1
                </a>
                            </li><!-- end ngRepeat: item in section.Items --><li ng-repeat="item in section.Items" class="ng-scope">
                                <a ng-click="openQuestion(item.Index + 1, true, $event)" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding attempted-item">
                                    2
                </a>
                            </li><!-- end ngRepeat: item in section.Items --><li ng-repeat="item in section.Items" class="ng-scope">
                                <a ng-click="openQuestion(item.Index + 1, true, $event)" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding attempted-item">
                                    3
                </a>
                            </li><!-- end ngRepeat: item in section.Items --><li ng-repeat="item in section.Items" class="ng-scope">
                                <a ng-click="openQuestion(item.Index + 1, true, $event)" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding attempted-item">
                                    4
                </a>
                            </li><!-- end ngRepeat: item in section.Items --><li ng-repeat="item in section.Items" class="ng-scope">
                                <a ng-click="openQuestion(item.Index + 1, true, $event)" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding attempted-item">
                                    5
                </a>
                            </li><!-- end ngRepeat: item in section.Items --><li ng-repeat="item in section.Items" class="ng-scope">
                                <a ng-click="openQuestion(item.Index + 1, true, $event)" ng-class="{ 'active' : pagination.current == (item.Index+1), 'flagged-item' : pagination.flags[item.Index+1], 'attempted-item' : (pagination.attempteds[item.Index+1] &amp;&amp; !pagination.flags[item.Index+1])}" class="ng-binding active">
                                    6
                </a>
                            </li><!-- end ngRepeat: item in section.Items -->
        </ul><!-- end ngIf: 1 < section.Items.length -->
    </div>
                    <div class="toggleHeaderBtn show-mobile ng-scope" ng-show="showHeader" ng-click="toggleTabHeader()">Hide</div>


                    <!-- uiView: question --><div class="container-fluid _questionsWrapper  content-padding-added" ui-view="question" ng-swipe-right="swipeQuestion('prev', $event)" ng-swipe-left="swipeQuestion('next', $event)"><div id="ques6" data-num="6" class="content-wrapper _item-area _question UnAttempted " ng-class="{'loading-image' : item.questionImages.loadingImage(item.Index)}">
                        <!-- ngIf: item.questionImages.hasImagesLoaded(item.Index) --><div ng-if="item.questionImages.hasImagesLoaded(item.Index)" class="row _question5">
                            <div ng-style="{'max-height': ''+'573'+'px'}" class="col-md-6 col-sm-6 _question-body question-body" style="max-height: 573px;">
                                <!-- ngInclude: 'question-header-template' --><div ng-include="'question-header-template'" class="ng-scope">
                                    <div class=" breadcrumb">
                                        <span class="filter-flag unattempted-flag"></span>
                                        <h2 class="font-bold sr ng-binding"><span i18-text="" i18-tag="TEST_QUESTION" class="ng-isolate-scope">Question</span> # 6</h2>
                                        <!-- ngIf: !testWindow.IsPracticeTest --><a ng-if="!testWindow.IsPracticeTest" class="pull-right muted control-right" ng-click="flagForReview(item)">
                                            <span class="icon-revisit ng-isolate-scope" aria-label="Click if you wish to revisit this." ng-class="{'flagged': item.IsFlagged}" i18-text="" i18-title="TEST_MCQ_REVIEW_MSG" i18-tag="TEST_MCQ_REVIEW" title="Click if you wish to review this question later. This will have no implication on your score">Revisit</span><!-- ngIf: item.IsFlagged -->
        </a><!-- end ngIf: !testWindow.IsPracticeTest -->
         <!-- ngIf: !item.twoColumnLayout && testWindow.Assessment.UiSettings.ShowScientificCalculator -->
    </div>
                                </div>
                                <div class="control-left" question-text="" text="item.Question.QuestionText"><div class="text-tags  ng-scope"><div>
                                    What will be the output when the following code is executed?&nbsp;
 <div class="_snippet">

                                        <textarea code-editor="" mode="JAVASCRIPT" type="snippet" style="display: none;"></textarea><div class="CodeMirror cm-s-default CodeMirror-wrap"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 5px; left: 35px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" cm-not-content="true"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true"><div style="height: 100%; min-height: 1px; width: 0px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 30px; margin-bottom: -15px; border-right-width: 15px; min-height: 208px; padding-right: 0px; padding-bottom: 0px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>10</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"><div class="CodeMirror-cursor" style="left: 4px; top: 0px; height: 20px;">&nbsp;</div></div><div class="CodeMirror-code" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">person</span> <span class="cm-operator">=</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">_name</span>: <span class="cm-string">'Deepak'</span>,</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">getName</span>: <span class="cm-keyword">function</span> (){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-keyword">this</span>.<span class="cm-property">_name</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">  }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">};</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">fetchName</span> <span class="cm-operator">=</span> <span class="cm-variable">person</span>.<span class="cm-property">getName</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">fetchName</span>());</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">person</span>.<span class="cm-property">getName</span>());</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 15px; width: 1px; border-bottom: 0px solid transparent; top: 208px;"></div><div class="CodeMirror-gutters" style="height: 223px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div></div></div></div>
                                    </div>
                                </div></div></div>
                            </div>
                            <div ng-style="{'max-height': ''+'573'+'px'}" class="col-md-6 col-sm-6 _response-body mcqa-response-body response-body" style="max-height: 573px;">
                                <fieldset>
                                    <legend class="breadcrumb sr">
                                        <span class="sr-only" question-text="" text="item.Question.QuestionText"><div class="text-tags  ng-scope"><div>
                                            What will be the output when the following code is executed?&nbsp;
 <div class="_snippet">

                                                <textarea code-editor="" mode="JAVASCRIPT" type="snippet" style="display: none;">var person = {
                                                    _name: 'Deepak',
  getName: function (){
    return this._name;
  }
};

var fetchName = person.getName;
console.log(fetchName());
console.log(person.getName());</textarea><div class="CodeMirror cm-s-default CodeMirror-wrap"><div style="overflow: hidden; position: relative; width: 3px; height: 0px; top: 5px; left: 0px;"><textarea autocorrect="off" autocapitalize="off" spellcheck="false" style="position: absolute; bottom: -1em; padding: 0px; width: 1000px; height: 1em; outline: none;" tabindex="0"></textarea></div><div class="CodeMirror-vscrollbar" cm-not-content="true"><div style="min-width: 1px; height: 0px;"></div></div><div class="CodeMirror-hscrollbar" cm-not-content="true" style="display: block; right: 0px; left: 30px;"><div style="height: 100%; min-height: 1px; width: 6px;"></div></div><div class="CodeMirror-scrollbar-filler" cm-not-content="true"></div><div class="CodeMirror-gutter-filler" cm-not-content="true"></div><div class="CodeMirror-scroll" tabindex="-1"><div class="CodeMirror-sizer" style="margin-left: 30px; margin-bottom: -15px; border-right-width: 15px; min-height: 3328px; padding-right: 0px; padding-bottom: 15px;"><div style="position: relative; top: 0px;"><div class="CodeMirror-lines"><div style="position: relative; outline: none;"><div class="CodeMirror-measure"><pre><span>xxxxxxxxxx</span></pre><div class="CodeMirror-linenumber CodeMirror-gutter-elt"><div>10</div></div></div><div class="CodeMirror-measure"></div><div style="position: relative; z-index: 1;"></div><div class="CodeMirror-cursors"><div class="CodeMirror-cursor" style="left: 4px; top: 0px; height: 19.5px;">&nbsp;</div></div><div class="CodeMirror-code" style=""><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">1</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">person</span> <span class="cm-operator">=</span> {</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">2</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">_name</span>: <span class="cm-string">'Deepak'</span>,</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">3</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp;<span class="cm-property">getName</span>: <span class="cm-keyword">function</span> (){</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">4</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"> &nbsp; &nbsp;<span class="cm-keyword">return</span> <span class="cm-keyword">this</span>.<span class="cm-property">_name</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">5</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">  }</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">6</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;">};</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">7</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span cm-text="">​</span></span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">8</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-keyword">var</span> <span class="cm-def">fetchName</span> <span class="cm-operator">=</span> <span class="cm-variable">person</span>.<span class="cm-property">getName</span>;</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">9</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">fetchName</span>());</span></pre></div><div style="position: relative;"><div class="CodeMirror-gutter-wrapper" style="left: -30px;"><div class="CodeMirror-linenumber CodeMirror-gutter-elt" style="left: 0px; width: 21px;">10</div></div><pre class=" CodeMirror-line "><span style="padding-right: 0.1px;"><span class="cm-variable">console</span>.<span class="cm-property">log</span>(<span class="cm-variable">person</span>.<span class="cm-property">getName</span>());</span></pre></div></div></div></div></div></div><div style="position: absolute; height: 15px; width: 1px; border-bottom: 15px solid transparent; top: 3328px;"></div><div class="CodeMirror-gutters" style="height: 3358px;"><div class="CodeMirror-gutter CodeMirror-linenumbers" style="width: 29px;"></div></div></div></div>
                                            </div>
                                        </div></div></span>
                                        <strong i18-text="" i18-tag="TEST_MCQ_CHHOSE_BEST_OPTION" class="ng-isolate-scope">Choose the best option</strong>
                                        <!-- ngIf: testWindow.Assessment.UiSettings.ShowScientificCalculator -->
                </legend>
                                    <!-- ngRepeat: index in item.uiPositions --><div ng-repeat="index in item.uiPositions" class="_options control-left ng-scope">
                                        <label class="font-normal radio">
                                            <!-- ngIf: item.DisplayType == 'MCQ' --><input ng-if="item.DisplayType == 'MCQ'" type="radio" class="cursor-pointer ng-scope" name="response5" ng-click="saveResponseMcq(item.Index,item.Answers[index].AnswerId)" ng-value="1" ng-checked="item.IsAttempted &amp;&amp; item.Response == item.Answers[index].AnswerId" value="1"><!-- end ngIf: item.DisplayType == 'MCQ' -->
                        <!-- ngIf: item.DisplayType == 'MCA' -->
                        <span data-index="0" question-text="" text="item.Answers[index].AnswerDescription" class="_option-text"><div class="text-tags  ng-scope"><div>undefined Deepak</div></div></span>
                    </label>
                </div><!-- end ngRepeat: index in item.uiPositions --><div ng-repeat="index in item.uiPositions" class="_options control-left ng-scope">
                                            <label class="font-normal radio">
                                                <!-- ngIf: item.DisplayType == 'MCQ' --><input ng-if="item.DisplayType == 'MCQ'" type="radio" class="cursor-pointer ng-scope" name="response5" ng-click="saveResponseMcq(item.Index,item.Answers[index].AnswerId)" ng-value="2" ng-checked="item.IsAttempted &amp;&amp; item.Response == item.Answers[index].AnswerId" value="2"><!-- end ngIf: item.DisplayType == 'MCQ' -->
                        <!-- ngIf: item.DisplayType == 'MCA' -->
                        <span data-index="1" question-text="" text="item.Answers[index].AnswerDescription" class="_option-text"><div class="text-tags  ng-scope"><div>undefined undefined</div></div></span>
                    </label>
                </div><!-- end ngRepeat: index in item.uiPositions --><div ng-repeat="index in item.uiPositions" class="_options control-left ng-scope">
                                                <label class="font-normal radio">
                                                    <!-- ngIf: item.DisplayType == 'MCQ' --><input ng-if="item.DisplayType == 'MCQ'" type="radio" class="cursor-pointer ng-scope" name="response5" ng-click="saveResponseMcq(item.Index,item.Answers[index].AnswerId)" ng-value="3" ng-checked="item.IsAttempted &amp;&amp; item.Response == item.Answers[index].AnswerId" value="3"><!-- end ngIf: item.DisplayType == 'MCQ' -->
                        <!-- ngIf: item.DisplayType == 'MCA' -->
                        <span data-index="2" question-text="" text="item.Answers[index].AnswerDescription" class="_option-text"><div class="text-tags  ng-scope"><div>Deepak Deepak</div></div></span>
                    </label>
                </div><!-- end ngRepeat: index in item.uiPositions --><div ng-repeat="index in item.uiPositions" class="_options control-left ng-scope">
                                                    <label class="font-normal radio">
                                                        <!-- ngIf: item.DisplayType == 'MCQ' --><input ng-if="item.DisplayType == 'MCQ'" type="radio" class="cursor-pointer ng-scope" name="response5" ng-click="saveResponseMcq(item.Index,item.Answers[index].AnswerId)" ng-value="4" ng-checked="item.IsAttempted &amp;&amp; item.Response == item.Answers[index].AnswerId" value="4"><!-- end ngIf: item.DisplayType == 'MCQ' -->
                        <!-- ngIf: item.DisplayType == 'MCA' -->
                        <span data-index="3" question-text="" text="item.Answers[index].AnswerDescription" class="_option-text"><div class="text-tags  ng-scope"><div>Deepak undefined</div></div></span>
                    </label>
                </div><!-- end ngRepeat: index in item.uiPositions -->
                <div class="control-left">
                                                        <!-- ngIf: item.DisplayType == 'MCQ' --><a class="_clear-answers muted cursor-pointer ng-scope ng-isolate-scope ng-hide" ng-if="item.DisplayType == 'MCQ'" ng-show="item.IsAttempted" i18-text="" i18-tag="TEST_MCQ_CLEAR_RESPONSE" ng-click="clearResponseMcq(item.Index)">Clear Response</a><!-- end ngIf: item.DisplayType == 'MCQ' -->
                    <!-- ngIf: item.DisplayType == 'MCA' -->
                </div>
            </fieldset>
                                            </div>
                                        </div><!-- end ngIf: item.questionImages.hasImagesLoaded(item.Index) -->
    <!-- ngIf: item.questionImages.loadingImage(item.Index) -->
</div>

                                    <!-- ngIf: !isMultipleQuestions --><div ng-if="!isMultipleQuestions" id="snackbar" class="alert ">
                                        <button type="button" class="close" ng-click="showWarningMessage = false;"><span aria-hidden="true">×</span></button>
                                        <i class="glyphicon glyphicon-info-sign"></i>
                                        <span class="ng-binding">Maximum  responses are allowed to select</span>
                                    </div><!-- end ngIf: !isMultipleQuestions --></div>

                            </div>

                            <div id="footer" class="ng-scope">
                                <div class="container-fluid hidden-xs hidden-sm">
                                    <div class="pull-left">
                                        <!-- ngIf: !theme.RemoveMettlBranding --><div ng-if="!theme.RemoveMettlBranding" class="ng-scope">
                                            <!-- ngIf: !opts.browserLock --><a ng-if="!opts.browserLock" aria-labelledby="Powered By mettl" target="_blank" href="//mettl.com/" title="Powered By mettl" aria-hidden="true" id="poweredByMettl" class="ng-scope">
                                                <img src="//static.mettl.com/resources/images/rr_powered_by_mettl.png?v=160.0.50.20200528.181543" alt="">
                </a><!-- end ngIf: !opts.browserLock -->
                <!-- ngIf: opts.browserLock -->
            </div><!-- end ngIf: !theme.RemoveMettlBranding -->
        </div>
                                        <div class="pull-left">
                                            <!-- ngIf: opts.visualProctoring -->
        </div>
                                        <div class="inline">
                                            <!-- ngIf: testWindow.CandidateName --><span ng-if="testWindow.CandidateName" class="ng-scope"><strong class="ng-binding">Anurag</strong> | </span><!-- end ngIf: testWindow.CandidateName -->
            <span i18-text="" i18-tag="TEST_SUPPORT" class="ng-isolate-scope">Support</span>
                                            <i class="icon-phone"></i>
                                        </div>
                                        <div class="inline"><div class="intl-tel-input"><input type="tel" tabindex="-1" readonly="readonly" class="_supportNumber supportNumber" value="+1-650-924-9221"><div class="flag-dropdown"><div class="selected-flag" title="United States: +1" aria-label="United States: +1"><div class="flag us"><div class="arrow"></div></div></div><ul class="country-list hide" style=""><li class="country preferred active" data-dial-code="1" data-country-code="us"><div class="flag us"></div><span class="country-name">United States</span><span class="dial-code">+1</span></li><li class="country preferred" data-dial-code="44" data-country-code="gb"><div class="flag gb"></div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li><li class="divider"></li><li class="country" data-dial-code="93" data-country-code="af"><div class="flag af"></div><span class="country-name">Afghanistan (‫افغانستان‬‎)</span><span class="dial-code">+93</span></li><li class="country" data-dial-code="355" data-country-code="al"><div class="flag al"></div><span class="country-name">Albania (Shqipëri)</span><span class="dial-code">+355</span></li><li class="country" data-dial-code="213" data-country-code="dz"><div class="flag dz"></div><span class="country-name">Algeria (‫الجزائر‬‎)</span><span class="dial-code">+213</span></li><li class="country" data-dial-code="1684" data-country-code="as"><div class="flag as"></div><span class="country-name">American Samoa</span><span class="dial-code">+1684</span></li><li class="country" data-dial-code="376" data-country-code="ad"><div class="flag ad"></div><span class="country-name">Andorra</span><span class="dial-code">+376</span></li><li class="country" data-dial-code="244" data-country-code="ao"><div class="flag ao"></div><span class="country-name">Angola</span><span class="dial-code">+244</span></li><li class="country" data-dial-code="1264" data-country-code="ai"><div class="flag ai"></div><span class="country-name">Anguilla</span><span class="dial-code">+1264</span></li><li class="country" data-dial-code="1268" data-country-code="ag"><div class="flag ag"></div><span class="country-name">Antigua and Barbuda</span><span class="dial-code">+1268</span></li><li class="country" data-dial-code="54" data-country-code="ar"><div class="flag ar"></div><span class="country-name">Argentina</span><span class="dial-code">+54</span></li><li class="country" data-dial-code="374" data-country-code="am"><div class="flag am"></div><span class="country-name">Armenia (Հայաստան)</span><span class="dial-code">+374</span></li><li class="country" data-dial-code="297" data-country-code="aw"><div class="flag aw"></div><span class="country-name">Aruba</span><span class="dial-code">+297</span></li><li class="country" data-dial-code="61" data-country-code="au"><div class="flag au"></div><span class="country-name">Australia</span><span class="dial-code">+61</span></li><li class="country" data-dial-code="43" data-country-code="at"><div class="flag at"></div><span class="country-name">Austria (Österreich)</span><span class="dial-code">+43</span></li><li class="country" data-dial-code="994" data-country-code="az"><div class="flag az"></div><span class="country-name">Azerbaijan (Azərbaycan)</span><span class="dial-code">+994</span></li><li class="country" data-dial-code="1242" data-country-code="bs"><div class="flag bs"></div><span class="country-name">Bahamas</span><span class="dial-code">+1242</span></li><li class="country" data-dial-code="973" data-country-code="bh"><div class="flag bh"></div><span class="country-name">Bahrain (‫البحرين‬‎)</span><span class="dial-code">+973</span></li><li class="country" data-dial-code="880" data-country-code="bd"><div class="flag bd"></div><span class="country-name">Bangladesh (বাংলাদেশ)</span><span class="dial-code">+880</span></li><li class="country" data-dial-code="1246" data-country-code="bb"><div class="flag bb"></div><span class="country-name">Barbados</span><span class="dial-code">+1246</span></li><li class="country" data-dial-code="375" data-country-code="by"><div class="flag by"></div><span class="country-name">Belarus (Беларусь)</span><span class="dial-code">+375</span></li><li class="country" data-dial-code="32" data-country-code="be"><div class="flag be"></div><span class="country-name">Belgium (België)</span><span class="dial-code">+32</span></li><li class="country" data-dial-code="501" data-country-code="bz"><div class="flag bz"></div><span class="country-name">Belize</span><span class="dial-code">+501</span></li><li class="country" data-dial-code="229" data-country-code="bj"><div class="flag bj"></div><span class="country-name">Benin (Bénin)</span><span class="dial-code">+229</span></li><li class="country" data-dial-code="1441" data-country-code="bm"><div class="flag bm"></div><span class="country-name">Bermuda</span><span class="dial-code">+1441</span></li><li class="country" data-dial-code="975" data-country-code="bt"><div class="flag bt"></div><span class="country-name">Bhutan (འབྲུག)</span><span class="dial-code">+975</span></li><li class="country" data-dial-code="591" data-country-code="bo"><div class="flag bo"></div><span class="country-name">Bolivia</span><span class="dial-code">+591</span></li><li class="country" data-dial-code="387" data-country-code="ba"><div class="flag ba"></div><span class="country-name">Bosnia and Herzegovina (Босна и Херцеговина)</span><span class="dial-code">+387</span></li><li class="country" data-dial-code="267" data-country-code="bw"><div class="flag bw"></div><span class="country-name">Botswana</span><span class="dial-code">+267</span></li><li class="country" data-dial-code="55" data-country-code="br"><div class="flag br"></div><span class="country-name">Brazil (Brasil)</span><span class="dial-code">+55</span></li><li class="country" data-dial-code="246" data-country-code="io"><div class="flag io"></div><span class="country-name">British Indian Ocean Territory</span><span class="dial-code">+246</span></li><li class="country" data-dial-code="1284" data-country-code="vg"><div class="flag vg"></div><span class="country-name">British Virgin Islands</span><span class="dial-code">+1284</span></li><li class="country" data-dial-code="673" data-country-code="bn"><div class="flag bn"></div><span class="country-name">Brunei</span><span class="dial-code">+673</span></li><li class="country" data-dial-code="359" data-country-code="bg"><div class="flag bg"></div><span class="country-name">Bulgaria (България)</span><span class="dial-code">+359</span></li><li class="country" data-dial-code="226" data-country-code="bf"><div class="flag bf"></div><span class="country-name">Burkina Faso</span><span class="dial-code">+226</span></li><li class="country" data-dial-code="257" data-country-code="bi"><div class="flag bi"></div><span class="country-name">Burundi (Uburundi)</span><span class="dial-code">+257</span></li><li class="country" data-dial-code="855" data-country-code="kh"><div class="flag kh"></div><span class="country-name">Cambodia (កម្ពុជា)</span><span class="dial-code">+855</span></li><li class="country" data-dial-code="237" data-country-code="cm"><div class="flag cm"></div><span class="country-name">Cameroon (Cameroun)</span><span class="dial-code">+237</span></li><li class="country" data-dial-code="1" data-country-code="ca"><div class="flag ca"></div><span class="country-name">Canada</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="238" data-country-code="cv"><div class="flag cv"></div><span class="country-name">Cape Verde (Kabu Verdi)</span><span class="dial-code">+238</span></li><li class="country" data-dial-code="599" data-country-code="bq"><div class="flag bq"></div><span class="country-name">Caribbean Netherlands</span><span class="dial-code">+599</span></li><li class="country" data-dial-code="1345" data-country-code="ky"><div class="flag ky"></div><span class="country-name">Cayman Islands</span><span class="dial-code">+1345</span></li><li class="country" data-dial-code="236" data-country-code="cf"><div class="flag cf"></div><span class="country-name">Central African Republic (République centrafricaine)</span><span class="dial-code">+236</span></li><li class="country" data-dial-code="235" data-country-code="td"><div class="flag td"></div><span class="country-name">Chad (Tchad)</span><span class="dial-code">+235</span></li><li class="country" data-dial-code="56" data-country-code="cl"><div class="flag cl"></div><span class="country-name">Chile</span><span class="dial-code">+56</span></li><li class="country" data-dial-code="86" data-country-code="cn"><div class="flag cn"></div><span class="country-name">China (中国)</span><span class="dial-code">+86</span></li><li class="country" data-dial-code="57" data-country-code="co"><div class="flag co"></div><span class="country-name">Colombia</span><span class="dial-code">+57</span></li><li class="country" data-dial-code="269" data-country-code="km"><div class="flag km"></div><span class="country-name">Comoros (‫جزر القمر‬‎)</span><span class="dial-code">+269</span></li><li class="country" data-dial-code="243" data-country-code="cd"><div class="flag cd"></div><span class="country-name">Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)</span><span class="dial-code">+243</span></li><li class="country" data-dial-code="242" data-country-code="cg"><div class="flag cg"></div><span class="country-name">Congo (Republic) (Congo-Brazzaville)</span><span class="dial-code">+242</span></li><li class="country" data-dial-code="682" data-country-code="ck"><div class="flag ck"></div><span class="country-name">Cook Islands</span><span class="dial-code">+682</span></li><li class="country" data-dial-code="506" data-country-code="cr"><div class="flag cr"></div><span class="country-name">Costa Rica</span><span class="dial-code">+506</span></li><li class="country" data-dial-code="225" data-country-code="ci"><div class="flag ci"></div><span class="country-name">Côte d’Ivoire</span><span class="dial-code">+225</span></li><li class="country" data-dial-code="385" data-country-code="hr"><div class="flag hr"></div><span class="country-name">Croatia (Hrvatska)</span><span class="dial-code">+385</span></li><li class="country" data-dial-code="53" data-country-code="cu"><div class="flag cu"></div><span class="country-name">Cuba</span><span class="dial-code">+53</span></li><li class="country" data-dial-code="599" data-country-code="cw"><div class="flag cw"></div><span class="country-name">Curaçao</span><span class="dial-code">+599</span></li><li class="country" data-dial-code="357" data-country-code="cy"><div class="flag cy"></div><span class="country-name">Cyprus (Κύπρος)</span><span class="dial-code">+357</span></li><li class="country" data-dial-code="420" data-country-code="cz"><div class="flag cz"></div><span class="country-name">Czech Republic (Česká republika)</span><span class="dial-code">+420</span></li><li class="country" data-dial-code="45" data-country-code="dk"><div class="flag dk"></div><span class="country-name">Denmark (Danmark)</span><span class="dial-code">+45</span></li><li class="country" data-dial-code="253" data-country-code="dj"><div class="flag dj"></div><span class="country-name">Djibouti</span><span class="dial-code">+253</span></li><li class="country" data-dial-code="1767" data-country-code="dm"><div class="flag dm"></div><span class="country-name">Dominica</span><span class="dial-code">+1767</span></li><li class="country" data-dial-code="1" data-country-code="do"><div class="flag do"></div><span class="country-name">Dominican Republic (República Dominicana)</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="593" data-country-code="ec"><div class="flag ec"></div><span class="country-name">Ecuador</span><span class="dial-code">+593</span></li><li class="country" data-dial-code="20" data-country-code="eg"><div class="flag eg"></div><span class="country-name">Egypt (‫مصر‬‎)</span><span class="dial-code">+20</span></li><li class="country" data-dial-code="503" data-country-code="sv"><div class="flag sv"></div><span class="country-name">El Salvador</span><span class="dial-code">+503</span></li><li class="country" data-dial-code="240" data-country-code="gq"><div class="flag gq"></div><span class="country-name">Equatorial Guinea (Guinea Ecuatorial)</span><span class="dial-code">+240</span></li><li class="country" data-dial-code="291" data-country-code="er"><div class="flag er"></div><span class="country-name">Eritrea</span><span class="dial-code">+291</span></li><li class="country" data-dial-code="372" data-country-code="ee"><div class="flag ee"></div><span class="country-name">Estonia (Eesti)</span><span class="dial-code">+372</span></li><li class="country" data-dial-code="251" data-country-code="et"><div class="flag et"></div><span class="country-name">Ethiopia</span><span class="dial-code">+251</span></li><li class="country" data-dial-code="500" data-country-code="fk"><div class="flag fk"></div><span class="country-name">Falkland Islands (Islas Malvinas)</span><span class="dial-code">+500</span></li><li class="country" data-dial-code="298" data-country-code="fo"><div class="flag fo"></div><span class="country-name">Faroe Islands (Føroyar)</span><span class="dial-code">+298</span></li><li class="country" data-dial-code="679" data-country-code="fj"><div class="flag fj"></div><span class="country-name">Fiji</span><span class="dial-code">+679</span></li><li class="country" data-dial-code="358" data-country-code="fi"><div class="flag fi"></div><span class="country-name">Finland (Suomi)</span><span class="dial-code">+358</span></li><li class="country" data-dial-code="33" data-country-code="fr"><div class="flag fr"></div><span class="country-name">France</span><span class="dial-code">+33</span></li><li class="country" data-dial-code="594" data-country-code="gf"><div class="flag gf"></div><span class="country-name">French Guiana (Guyane française)</span><span class="dial-code">+594</span></li><li class="country" data-dial-code="689" data-country-code="pf"><div class="flag pf"></div><span class="country-name">French Polynesia (Polynésie française)</span><span class="dial-code">+689</span></li><li class="country" data-dial-code="241" data-country-code="ga"><div class="flag ga"></div><span class="country-name">Gabon</span><span class="dial-code">+241</span></li><li class="country" data-dial-code="220" data-country-code="gm"><div class="flag gm"></div><span class="country-name">Gambia</span><span class="dial-code">+220</span></li><li class="country" data-dial-code="995" data-country-code="ge"><div class="flag ge"></div><span class="country-name">Georgia (საქართველო)</span><span class="dial-code">+995</span></li><li class="country" data-dial-code="49" data-country-code="de"><div class="flag de"></div><span class="country-name">Germany (Deutschland)</span><span class="dial-code">+49</span></li><li class="country" data-dial-code="233" data-country-code="gh"><div class="flag gh"></div><span class="country-name">Ghana (Gaana)</span><span class="dial-code">+233</span></li><li class="country" data-dial-code="350" data-country-code="gi"><div class="flag gi"></div><span class="country-name">Gibraltar</span><span class="dial-code">+350</span></li><li class="country" data-dial-code="30" data-country-code="gr"><div class="flag gr"></div><span class="country-name">Greece (Ελλάδα)</span><span class="dial-code">+30</span></li><li class="country" data-dial-code="299" data-country-code="gl"><div class="flag gl"></div><span class="country-name">Greenland (Kalaallit Nunaat)</span><span class="dial-code">+299</span></li><li class="country" data-dial-code="1473" data-country-code="gd"><div class="flag gd"></div><span class="country-name">Grenada</span><span class="dial-code">+1473</span></li><li class="country" data-dial-code="590" data-country-code="gp"><div class="flag gp"></div><span class="country-name">Guadeloupe</span><span class="dial-code">+590</span></li><li class="country" data-dial-code="1671" data-country-code="gu"><div class="flag gu"></div><span class="country-name">Guam</span><span class="dial-code">+1671</span></li><li class="country" data-dial-code="502" data-country-code="gt"><div class="flag gt"></div><span class="country-name">Guatemala</span><span class="dial-code">+502</span></li><li class="country" data-dial-code="224" data-country-code="gn"><div class="flag gn"></div><span class="country-name">Guinea (Guinée)</span><span class="dial-code">+224</span></li><li class="country" data-dial-code="245" data-country-code="gw"><div class="flag gw"></div><span class="country-name">Guinea-Bissau (Guiné Bissau)</span><span class="dial-code">+245</span></li><li class="country" data-dial-code="592" data-country-code="gy"><div class="flag gy"></div><span class="country-name">Guyana</span><span class="dial-code">+592</span></li><li class="country" data-dial-code="509" data-country-code="ht"><div class="flag ht"></div><span class="country-name">Haiti</span><span class="dial-code">+509</span></li><li class="country" data-dial-code="504" data-country-code="hn"><div class="flag hn"></div><span class="country-name">Honduras</span><span class="dial-code">+504</span></li><li class="country" data-dial-code="852" data-country-code="hk"><div class="flag hk"></div><span class="country-name">Hong Kong (香港)</span><span class="dial-code">+852</span></li><li class="country" data-dial-code="36" data-country-code="hu"><div class="flag hu"></div><span class="country-name">Hungary (Magyarország)</span><span class="dial-code">+36</span></li><li class="country" data-dial-code="354" data-country-code="is"><div class="flag is"></div><span class="country-name">Iceland (Ísland)</span><span class="dial-code">+354</span></li><li class="country" data-dial-code="91" data-country-code="in"><div class="flag in"></div><span class="country-name">India (भारत)</span><span class="dial-code">+91</span></li><li class="country" data-dial-code="62" data-country-code="id"><div class="flag id"></div><span class="country-name">Indonesia</span><span class="dial-code">+62</span></li><li class="country" data-dial-code="98" data-country-code="ir"><div class="flag ir"></div><span class="country-name">Iran (‫ایران‬‎)</span><span class="dial-code">+98</span></li><li class="country" data-dial-code="964" data-country-code="iq"><div class="flag iq"></div><span class="country-name">Iraq (‫العراق‬‎)</span><span class="dial-code">+964</span></li><li class="country" data-dial-code="353" data-country-code="ie"><div class="flag ie"></div><span class="country-name">Ireland</span><span class="dial-code">+353</span></li><li class="country" data-dial-code="972" data-country-code="il"><div class="flag il"></div><span class="country-name">Israel (‫ישראל‬‎)</span><span class="dial-code">+972</span></li><li class="country" data-dial-code="39" data-country-code="it"><div class="flag it"></div><span class="country-name">Italy (Italia)</span><span class="dial-code">+39</span></li><li class="country" data-dial-code="1876" data-country-code="jm"><div class="flag jm"></div><span class="country-name">Jamaica</span><span class="dial-code">+1876</span></li><li class="country" data-dial-code="81" data-country-code="jp"><div class="flag jp"></div><span class="country-name">Japan (日本)</span><span class="dial-code">+81</span></li><li class="country" data-dial-code="962" data-country-code="jo"><div class="flag jo"></div><span class="country-name">Jordan (‫الأردن‬‎)</span><span class="dial-code">+962</span></li><li class="country" data-dial-code="7" data-country-code="kz"><div class="flag kz"></div><span class="country-name">Kazakhstan (Казахстан)</span><span class="dial-code">+7</span></li><li class="country" data-dial-code="254" data-country-code="ke"><div class="flag ke"></div><span class="country-name">Kenya</span><span class="dial-code">+254</span></li><li class="country" data-dial-code="686" data-country-code="ki"><div class="flag ki"></div><span class="country-name">Kiribati</span><span class="dial-code">+686</span></li><li class="country" data-dial-code="965" data-country-code="kw"><div class="flag kw"></div><span class="country-name">Kuwait (‫الكويت‬‎)</span><span class="dial-code">+965</span></li><li class="country" data-dial-code="996" data-country-code="kg"><div class="flag kg"></div><span class="country-name">Kyrgyzstan (Кыргызстан)</span><span class="dial-code">+996</span></li><li class="country" data-dial-code="856" data-country-code="la"><div class="flag la"></div><span class="country-name">Laos (ລາວ)</span><span class="dial-code">+856</span></li><li class="country" data-dial-code="371" data-country-code="lv"><div class="flag lv"></div><span class="country-name">Latvia (Latvija)</span><span class="dial-code">+371</span></li><li class="country" data-dial-code="961" data-country-code="lb"><div class="flag lb"></div><span class="country-name">Lebanon (‫لبنان‬‎)</span><span class="dial-code">+961</span></li><li class="country" data-dial-code="266" data-country-code="ls"><div class="flag ls"></div><span class="country-name">Lesotho</span><span class="dial-code">+266</span></li><li class="country" data-dial-code="231" data-country-code="lr"><div class="flag lr"></div><span class="country-name">Liberia</span><span class="dial-code">+231</span></li><li class="country" data-dial-code="218" data-country-code="ly"><div class="flag ly"></div><span class="country-name">Libya (‫ليبيا‬‎)</span><span class="dial-code">+218</span></li><li class="country" data-dial-code="423" data-country-code="li"><div class="flag li"></div><span class="country-name">Liechtenstein</span><span class="dial-code">+423</span></li><li class="country" data-dial-code="370" data-country-code="lt"><div class="flag lt"></div><span class="country-name">Lithuania (Lietuva)</span><span class="dial-code">+370</span></li><li class="country" data-dial-code="352" data-country-code="lu"><div class="flag lu"></div><span class="country-name">Luxembourg</span><span class="dial-code">+352</span></li><li class="country" data-dial-code="853" data-country-code="mo"><div class="flag mo"></div><span class="country-name">Macau (澳門)</span><span class="dial-code">+853</span></li><li class="country" data-dial-code="389" data-country-code="mk"><div class="flag mk"></div><span class="country-name">Macedonia (FYROM) (Македонија)</span><span class="dial-code">+389</span></li><li class="country" data-dial-code="261" data-country-code="mg"><div class="flag mg"></div><span class="country-name">Madagascar (Madagasikara)</span><span class="dial-code">+261</span></li><li class="country" data-dial-code="265" data-country-code="mw"><div class="flag mw"></div><span class="country-name">Malawi</span><span class="dial-code">+265</span></li><li class="country" data-dial-code="60" data-country-code="my"><div class="flag my"></div><span class="country-name">Malaysia</span><span class="dial-code">+60</span></li><li class="country" data-dial-code="960" data-country-code="mv"><div class="flag mv"></div><span class="country-name">Maldives</span><span class="dial-code">+960</span></li><li class="country" data-dial-code="223" data-country-code="ml"><div class="flag ml"></div><span class="country-name">Mali</span><span class="dial-code">+223</span></li><li class="country" data-dial-code="356" data-country-code="mt"><div class="flag mt"></div><span class="country-name">Malta</span><span class="dial-code">+356</span></li><li class="country" data-dial-code="692" data-country-code="mh"><div class="flag mh"></div><span class="country-name">Marshall Islands</span><span class="dial-code">+692</span></li><li class="country" data-dial-code="596" data-country-code="mq"><div class="flag mq"></div><span class="country-name">Martinique</span><span class="dial-code">+596</span></li><li class="country" data-dial-code="222" data-country-code="mr"><div class="flag mr"></div><span class="country-name">Mauritania (‫موريتانيا‬‎)</span><span class="dial-code">+222</span></li><li class="country" data-dial-code="230" data-country-code="mu"><div class="flag mu"></div><span class="country-name">Mauritius (Moris)</span><span class="dial-code">+230</span></li><li class="country" data-dial-code="52" data-country-code="mx"><div class="flag mx"></div><span class="country-name">Mexico (México)</span><span class="dial-code">+52</span></li><li class="country" data-dial-code="691" data-country-code="fm"><div class="flag fm"></div><span class="country-name">Micronesia</span><span class="dial-code">+691</span></li><li class="country" data-dial-code="373" data-country-code="md"><div class="flag md"></div><span class="country-name">Moldova (Republica Moldova)</span><span class="dial-code">+373</span></li><li class="country" data-dial-code="377" data-country-code="mc"><div class="flag mc"></div><span class="country-name">Monaco</span><span class="dial-code">+377</span></li><li class="country" data-dial-code="976" data-country-code="mn"><div class="flag mn"></div><span class="country-name">Mongolia (Монгол)</span><span class="dial-code">+976</span></li><li class="country" data-dial-code="382" data-country-code="me"><div class="flag me"></div><span class="country-name">Montenegro (Crna Gora)</span><span class="dial-code">+382</span></li><li class="country" data-dial-code="1664" data-country-code="ms"><div class="flag ms"></div><span class="country-name">Montserrat</span><span class="dial-code">+1664</span></li><li class="country" data-dial-code="212" data-country-code="ma"><div class="flag ma"></div><span class="country-name">Morocco (‫المغرب‬‎)</span><span class="dial-code">+212</span></li><li class="country" data-dial-code="258" data-country-code="mz"><div class="flag mz"></div><span class="country-name">Mozambique (Moçambique)</span><span class="dial-code">+258</span></li><li class="country" data-dial-code="95" data-country-code="mm"><div class="flag mm"></div><span class="country-name">Myanmar (Burma) (မြန်မာ)</span><span class="dial-code">+95</span></li><li class="country" data-dial-code="264" data-country-code="na"><div class="flag na"></div><span class="country-name">Namibia (Namibië)</span><span class="dial-code">+264</span></li><li class="country" data-dial-code="674" data-country-code="nr"><div class="flag nr"></div><span class="country-name">Nauru</span><span class="dial-code">+674</span></li><li class="country" data-dial-code="977" data-country-code="np"><div class="flag np"></div><span class="country-name">Nepal (नेपाल)</span><span class="dial-code">+977</span></li><li class="country" data-dial-code="31" data-country-code="nl"><div class="flag nl"></div><span class="country-name">Netherlands (Nederland)</span><span class="dial-code">+31</span></li><li class="country" data-dial-code="687" data-country-code="nc"><div class="flag nc"></div><span class="country-name">New Caledonia (Nouvelle-Calédonie)</span><span class="dial-code">+687</span></li><li class="country" data-dial-code="64" data-country-code="nz"><div class="flag nz"></div><span class="country-name">New Zealand</span><span class="dial-code">+64</span></li><li class="country" data-dial-code="505" data-country-code="ni"><div class="flag ni"></div><span class="country-name">Nicaragua</span><span class="dial-code">+505</span></li><li class="country" data-dial-code="227" data-country-code="ne"><div class="flag ne"></div><span class="country-name">Niger (Nijar)</span><span class="dial-code">+227</span></li><li class="country" data-dial-code="234" data-country-code="ng"><div class="flag ng"></div><span class="country-name">Nigeria</span><span class="dial-code">+234</span></li><li class="country" data-dial-code="683" data-country-code="nu"><div class="flag nu"></div><span class="country-name">Niue</span><span class="dial-code">+683</span></li><li class="country" data-dial-code="672" data-country-code="nf"><div class="flag nf"></div><span class="country-name">Norfolk Island</span><span class="dial-code">+672</span></li><li class="country" data-dial-code="850" data-country-code="kp"><div class="flag kp"></div><span class="country-name">North Korea (조선 민주주의 인민 공화국)</span><span class="dial-code">+850</span></li><li class="country" data-dial-code="1670" data-country-code="mp"><div class="flag mp"></div><span class="country-name">Northern Mariana Islands</span><span class="dial-code">+1670</span></li><li class="country" data-dial-code="47" data-country-code="no"><div class="flag no"></div><span class="country-name">Norway (Norge)</span><span class="dial-code">+47</span></li><li class="country" data-dial-code="968" data-country-code="om"><div class="flag om"></div><span class="country-name">Oman (‫عُمان‬‎)</span><span class="dial-code">+968</span></li><li class="country" data-dial-code="92" data-country-code="pk"><div class="flag pk"></div><span class="country-name">Pakistan (‫پاکستان‬‎)</span><span class="dial-code">+92</span></li><li class="country" data-dial-code="680" data-country-code="pw"><div class="flag pw"></div><span class="country-name">Palau</span><span class="dial-code">+680</span></li><li class="country" data-dial-code="970" data-country-code="ps"><div class="flag ps"></div><span class="country-name">Palestine (‫فلسطين‬‎)</span><span class="dial-code">+970</span></li><li class="country" data-dial-code="507" data-country-code="pa"><div class="flag pa"></div><span class="country-name">Panama (Panamá)</span><span class="dial-code">+507</span></li><li class="country" data-dial-code="675" data-country-code="pg"><div class="flag pg"></div><span class="country-name">Papua New Guinea</span><span class="dial-code">+675</span></li><li class="country" data-dial-code="595" data-country-code="py"><div class="flag py"></div><span class="country-name">Paraguay</span><span class="dial-code">+595</span></li><li class="country" data-dial-code="51" data-country-code="pe"><div class="flag pe"></div><span class="country-name">Peru (Perú)</span><span class="dial-code">+51</span></li><li class="country" data-dial-code="63" data-country-code="ph"><div class="flag ph"></div><span class="country-name">Philippines</span><span class="dial-code">+63</span></li><li class="country" data-dial-code="48" data-country-code="pl"><div class="flag pl"></div><span class="country-name">Poland (Polska)</span><span class="dial-code">+48</span></li><li class="country" data-dial-code="351" data-country-code="pt"><div class="flag pt"></div><span class="country-name">Portugal</span><span class="dial-code">+351</span></li><li class="country" data-dial-code="1" data-country-code="pr"><div class="flag pr"></div><span class="country-name">Puerto Rico</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="974" data-country-code="qa"><div class="flag qa"></div><span class="country-name">Qatar (‫قطر‬‎)</span><span class="dial-code">+974</span></li><li class="country" data-dial-code="262" data-country-code="re"><div class="flag re"></div><span class="country-name">Réunion (La Réunion)</span><span class="dial-code">+262</span></li><li class="country" data-dial-code="40" data-country-code="ro"><div class="flag ro"></div><span class="country-name">Romania (România)</span><span class="dial-code">+40</span></li><li class="country" data-dial-code="7" data-country-code="ru"><div class="flag ru"></div><span class="country-name">Russia (Россия)</span><span class="dial-code">+7</span></li><li class="country" data-dial-code="250" data-country-code="rw"><div class="flag rw"></div><span class="country-name">Rwanda</span><span class="dial-code">+250</span></li><li class="country" data-dial-code="590" data-country-code="bl"><div class="flag bl"></div><span class="country-name">Saint Barthélemy (Saint-Barthélemy)</span><span class="dial-code">+590</span></li><li class="country" data-dial-code="290" data-country-code="sh"><div class="flag sh"></div><span class="country-name">Saint Helena</span><span class="dial-code">+290</span></li><li class="country" data-dial-code="1869" data-country-code="kn"><div class="flag kn"></div><span class="country-name">Saint Kitts and Nevis</span><span class="dial-code">+1869</span></li><li class="country" data-dial-code="1758" data-country-code="lc"><div class="flag lc"></div><span class="country-name">Saint Lucia</span><span class="dial-code">+1758</span></li><li class="country" data-dial-code="590" data-country-code="mf"><div class="flag mf"></div><span class="country-name">Saint Martin (Saint-Martin (partie française))</span><span class="dial-code">+590</span></li><li class="country" data-dial-code="508" data-country-code="pm"><div class="flag pm"></div><span class="country-name">Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</span><span class="dial-code">+508</span></li><li class="country" data-dial-code="1784" data-country-code="vc"><div class="flag vc"></div><span class="country-name">Saint Vincent and the Grenadines</span><span class="dial-code">+1784</span></li><li class="country" data-dial-code="685" data-country-code="ws"><div class="flag ws"></div><span class="country-name">Samoa</span><span class="dial-code">+685</span></li><li class="country" data-dial-code="378" data-country-code="sm"><div class="flag sm"></div><span class="country-name">San Marino</span><span class="dial-code">+378</span></li><li class="country" data-dial-code="239" data-country-code="st"><div class="flag st"></div><span class="country-name">São Tomé and Príncipe (São Tomé e Príncipe)</span><span class="dial-code">+239</span></li><li class="country" data-dial-code="966" data-country-code="sa"><div class="flag sa"></div><span class="country-name">Saudi Arabia (‫المملكة العربية السعودية‬‎)</span><span class="dial-code">+966</span></li><li class="country" data-dial-code="221" data-country-code="sn"><div class="flag sn"></div><span class="country-name">Senegal (Sénégal)</span><span class="dial-code">+221</span></li><li class="country" data-dial-code="381" data-country-code="rs"><div class="flag rs"></div><span class="country-name">Serbia (Србија)</span><span class="dial-code">+381</span></li><li class="country" data-dial-code="248" data-country-code="sc"><div class="flag sc"></div><span class="country-name">Seychelles</span><span class="dial-code">+248</span></li><li class="country" data-dial-code="232" data-country-code="sl"><div class="flag sl"></div><span class="country-name">Sierra Leone</span><span class="dial-code">+232</span></li><li class="country" data-dial-code="65" data-country-code="sg"><div class="flag sg"></div><span class="country-name">Singapore</span><span class="dial-code">+65</span></li><li class="country" data-dial-code="1721" data-country-code="sx"><div class="flag sx"></div><span class="country-name">Sint Maarten</span><span class="dial-code">+1721</span></li><li class="country" data-dial-code="421" data-country-code="sk"><div class="flag sk"></div><span class="country-name">Slovakia (Slovensko)</span><span class="dial-code">+421</span></li><li class="country" data-dial-code="386" data-country-code="si"><div class="flag si"></div><span class="country-name">Slovenia (Slovenija)</span><span class="dial-code">+386</span></li><li class="country" data-dial-code="677" data-country-code="sb"><div class="flag sb"></div><span class="country-name">Solomon Islands</span><span class="dial-code">+677</span></li><li class="country" data-dial-code="252" data-country-code="so"><div class="flag so"></div><span class="country-name">Somalia (Soomaaliya)</span><span class="dial-code">+252</span></li><li class="country" data-dial-code="27" data-country-code="za"><div class="flag za"></div><span class="country-name">South Africa</span><span class="dial-code">+27</span></li><li class="country" data-dial-code="82" data-country-code="kr"><div class="flag kr"></div><span class="country-name">South Korea (대한민국)</span><span class="dial-code">+82</span></li><li class="country" data-dial-code="211" data-country-code="ss"><div class="flag ss"></div><span class="country-name">South Sudan (‫جنوب السودان‬‎)</span><span class="dial-code">+211</span></li><li class="country" data-dial-code="34" data-country-code="es"><div class="flag es"></div><span class="country-name">Spain (España)</span><span class="dial-code">+34</span></li><li class="country" data-dial-code="94" data-country-code="lk"><div class="flag lk"></div><span class="country-name">Sri Lanka (ශ්‍රී ලංකාව)</span><span class="dial-code">+94</span></li><li class="country" data-dial-code="249" data-country-code="sd"><div class="flag sd"></div><span class="country-name">Sudan (‫السودان‬‎)</span><span class="dial-code">+249</span></li><li class="country" data-dial-code="597" data-country-code="sr"><div class="flag sr"></div><span class="country-name">Suriname</span><span class="dial-code">+597</span></li><li class="country" data-dial-code="268" data-country-code="sz"><div class="flag sz"></div><span class="country-name">Swaziland</span><span class="dial-code">+268</span></li><li class="country" data-dial-code="46" data-country-code="se"><div class="flag se"></div><span class="country-name">Sweden (Sverige)</span><span class="dial-code">+46</span></li><li class="country" data-dial-code="41" data-country-code="ch"><div class="flag ch"></div><span class="country-name">Switzerland (Schweiz)</span><span class="dial-code">+41</span></li><li class="country" data-dial-code="963" data-country-code="sy"><div class="flag sy"></div><span class="country-name">Syria (‫سوريا‬‎)</span><span class="dial-code">+963</span></li><li class="country" data-dial-code="886" data-country-code="tw"><div class="flag tw"></div><span class="country-name">Taiwan (台灣)</span><span class="dial-code">+886</span></li><li class="country" data-dial-code="992" data-country-code="tj"><div class="flag tj"></div><span class="country-name">Tajikistan</span><span class="dial-code">+992</span></li><li class="country" data-dial-code="255" data-country-code="tz"><div class="flag tz"></div><span class="country-name">Tanzania</span><span class="dial-code">+255</span></li><li class="country" data-dial-code="66" data-country-code="th"><div class="flag th"></div><span class="country-name">Thailand (ไทย)</span><span class="dial-code">+66</span></li><li class="country" data-dial-code="670" data-country-code="tl"><div class="flag tl"></div><span class="country-name">Timor-Leste</span><span class="dial-code">+670</span></li><li class="country" data-dial-code="228" data-country-code="tg"><div class="flag tg"></div><span class="country-name">Togo</span><span class="dial-code">+228</span></li><li class="country" data-dial-code="690" data-country-code="tk"><div class="flag tk"></div><span class="country-name">Tokelau</span><span class="dial-code">+690</span></li><li class="country" data-dial-code="676" data-country-code="to"><div class="flag to"></div><span class="country-name">Tonga</span><span class="dial-code">+676</span></li><li class="country" data-dial-code="1868" data-country-code="tt"><div class="flag tt"></div><span class="country-name">Trinidad and Tobago</span><span class="dial-code">+1868</span></li><li class="country" data-dial-code="216" data-country-code="tn"><div class="flag tn"></div><span class="country-name">Tunisia (‫تونس‬‎)</span><span class="dial-code">+216</span></li><li class="country" data-dial-code="90" data-country-code="tr"><div class="flag tr"></div><span class="country-name">Turkey (Türkiye)</span><span class="dial-code">+90</span></li><li class="country" data-dial-code="993" data-country-code="tm"><div class="flag tm"></div><span class="country-name">Turkmenistan</span><span class="dial-code">+993</span></li><li class="country" data-dial-code="1649" data-country-code="tc"><div class="flag tc"></div><span class="country-name">Turks and Caicos Islands</span><span class="dial-code">+1649</span></li><li class="country" data-dial-code="688" data-country-code="tv"><div class="flag tv"></div><span class="country-name">Tuvalu</span><span class="dial-code">+688</span></li><li class="country" data-dial-code="1340" data-country-code="vi"><div class="flag vi"></div><span class="country-name">U.S. Virgin Islands</span><span class="dial-code">+1340</span></li><li class="country" data-dial-code="256" data-country-code="ug"><div class="flag ug"></div><span class="country-name">Uganda</span><span class="dial-code">+256</span></li><li class="country" data-dial-code="380" data-country-code="ua"><div class="flag ua"></div><span class="country-name">Ukraine (Україна)</span><span class="dial-code">+380</span></li><li class="country" data-dial-code="971" data-country-code="ae"><div class="flag ae"></div><span class="country-name">United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</span><span class="dial-code">+971</span></li><li class="country" data-dial-code="44" data-country-code="gb"><div class="flag gb"></div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li><li class="country" data-dial-code="1" data-country-code="us"><div class="flag us"></div><span class="country-name">United States</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="598" data-country-code="uy"><div class="flag uy"></div><span class="country-name">Uruguay</span><span class="dial-code">+598</span></li><li class="country" data-dial-code="998" data-country-code="uz"><div class="flag uz"></div><span class="country-name">Uzbekistan (Oʻzbekiston)</span><span class="dial-code">+998</span></li><li class="country" data-dial-code="678" data-country-code="vu"><div class="flag vu"></div><span class="country-name">Vanuatu</span><span class="dial-code">+678</span></li><li class="country" data-dial-code="39" data-country-code="va"><div class="flag va"></div><span class="country-name">Vatican City (Città del Vaticano)</span><span class="dial-code">+39</span></li><li class="country" data-dial-code="58" data-country-code="ve"><div class="flag ve"></div><span class="country-name">Venezuela</span><span class="dial-code">+58</span></li><li class="country" data-dial-code="84" data-country-code="vn"><div class="flag vn"></div><span class="country-name">Vietnam (Việt Nam)</span><span class="dial-code">+84</span></li><li class="country" data-dial-code="681" data-country-code="wf"><div class="flag wf"></div><span class="country-name">Wallis and Futuna</span><span class="dial-code">+681</span></li><li class="country" data-dial-code="967" data-country-code="ye"><div class="flag ye"></div><span class="country-name">Yemen (‫اليمن‬‎)</span><span class="dial-code">+967</span></li><li class="country" data-dial-code="260" data-country-code="zm"><div class="flag zm"></div><span class="country-name">Zambia</span><span class="dial-code">+260</span></li><li class="country" data-dial-code="263" data-country-code="zw"><div class="flag zw"></div><span class="country-name">Zimbabwe</span><span class="dial-code">+263</span></li></ul></div></div></div>
                                            <div class="inline"><!-- ngIf: opts.effectiveSecondarySupportNumber --><div class="intl-tel-input"><input ng-if="opts.effectiveSecondarySupportNumber" tabindex="-1" type="tel" readonly="readonly" class="_supportNumber supportNumber ng-scope" value="+91-82878-03040"><div class="flag-dropdown"><div class="selected-flag" title="India (भारत): +91" aria-label="India (भारत): +91"><div class="flag in"><div class="arrow"></div></div></div><ul class="country-list hide" style=""><li class="country preferred" data-dial-code="1" data-country-code="us"><div class="flag us"></div><span class="country-name">United States</span><span class="dial-code">+1</span></li><li class="country preferred" data-dial-code="44" data-country-code="gb"><div class="flag gb"></div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li><li class="divider"></li><li class="country" data-dial-code="93" data-country-code="af"><div class="flag af"></div><span class="country-name">Afghanistan (‫افغانستان‬‎)</span><span class="dial-code">+93</span></li><li class="country" data-dial-code="355" data-country-code="al"><div class="flag al"></div><span class="country-name">Albania (Shqipëri)</span><span class="dial-code">+355</span></li><li class="country" data-dial-code="213" data-country-code="dz"><div class="flag dz"></div><span class="country-name">Algeria (‫الجزائر‬‎)</span><span class="dial-code">+213</span></li><li class="country" data-dial-code="1684" data-country-code="as"><div class="flag as"></div><span class="country-name">American Samoa</span><span class="dial-code">+1684</span></li><li class="country" data-dial-code="376" data-country-code="ad"><div class="flag ad"></div><span class="country-name">Andorra</span><span class="dial-code">+376</span></li><li class="country" data-dial-code="244" data-country-code="ao"><div class="flag ao"></div><span class="country-name">Angola</span><span class="dial-code">+244</span></li><li class="country" data-dial-code="1264" data-country-code="ai"><div class="flag ai"></div><span class="country-name">Anguilla</span><span class="dial-code">+1264</span></li><li class="country" data-dial-code="1268" data-country-code="ag"><div class="flag ag"></div><span class="country-name">Antigua and Barbuda</span><span class="dial-code">+1268</span></li><li class="country" data-dial-code="54" data-country-code="ar"><div class="flag ar"></div><span class="country-name">Argentina</span><span class="dial-code">+54</span></li><li class="country" data-dial-code="374" data-country-code="am"><div class="flag am"></div><span class="country-name">Armenia (Հայաստան)</span><span class="dial-code">+374</span></li><li class="country" data-dial-code="297" data-country-code="aw"><div class="flag aw"></div><span class="country-name">Aruba</span><span class="dial-code">+297</span></li><li class="country" data-dial-code="61" data-country-code="au"><div class="flag au"></div><span class="country-name">Australia</span><span class="dial-code">+61</span></li><li class="country" data-dial-code="43" data-country-code="at"><div class="flag at"></div><span class="country-name">Austria (Österreich)</span><span class="dial-code">+43</span></li><li class="country" data-dial-code="994" data-country-code="az"><div class="flag az"></div><span class="country-name">Azerbaijan (Azərbaycan)</span><span class="dial-code">+994</span></li><li class="country" data-dial-code="1242" data-country-code="bs"><div class="flag bs"></div><span class="country-name">Bahamas</span><span class="dial-code">+1242</span></li><li class="country" data-dial-code="973" data-country-code="bh"><div class="flag bh"></div><span class="country-name">Bahrain (‫البحرين‬‎)</span><span class="dial-code">+973</span></li><li class="country" data-dial-code="880" data-country-code="bd"><div class="flag bd"></div><span class="country-name">Bangladesh (বাংলাদেশ)</span><span class="dial-code">+880</span></li><li class="country" data-dial-code="1246" data-country-code="bb"><div class="flag bb"></div><span class="country-name">Barbados</span><span class="dial-code">+1246</span></li><li class="country" data-dial-code="375" data-country-code="by"><div class="flag by"></div><span class="country-name">Belarus (Беларусь)</span><span class="dial-code">+375</span></li><li class="country" data-dial-code="32" data-country-code="be"><div class="flag be"></div><span class="country-name">Belgium (België)</span><span class="dial-code">+32</span></li><li class="country" data-dial-code="501" data-country-code="bz"><div class="flag bz"></div><span class="country-name">Belize</span><span class="dial-code">+501</span></li><li class="country" data-dial-code="229" data-country-code="bj"><div class="flag bj"></div><span class="country-name">Benin (Bénin)</span><span class="dial-code">+229</span></li><li class="country" data-dial-code="1441" data-country-code="bm"><div class="flag bm"></div><span class="country-name">Bermuda</span><span class="dial-code">+1441</span></li><li class="country" data-dial-code="975" data-country-code="bt"><div class="flag bt"></div><span class="country-name">Bhutan (འབྲུག)</span><span class="dial-code">+975</span></li><li class="country" data-dial-code="591" data-country-code="bo"><div class="flag bo"></div><span class="country-name">Bolivia</span><span class="dial-code">+591</span></li><li class="country" data-dial-code="387" data-country-code="ba"><div class="flag ba"></div><span class="country-name">Bosnia and Herzegovina (Босна и Херцеговина)</span><span class="dial-code">+387</span></li><li class="country" data-dial-code="267" data-country-code="bw"><div class="flag bw"></div><span class="country-name">Botswana</span><span class="dial-code">+267</span></li><li class="country" data-dial-code="55" data-country-code="br"><div class="flag br"></div><span class="country-name">Brazil (Brasil)</span><span class="dial-code">+55</span></li><li class="country" data-dial-code="246" data-country-code="io"><div class="flag io"></div><span class="country-name">British Indian Ocean Territory</span><span class="dial-code">+246</span></li><li class="country" data-dial-code="1284" data-country-code="vg"><div class="flag vg"></div><span class="country-name">British Virgin Islands</span><span class="dial-code">+1284</span></li><li class="country" data-dial-code="673" data-country-code="bn"><div class="flag bn"></div><span class="country-name">Brunei</span><span class="dial-code">+673</span></li><li class="country" data-dial-code="359" data-country-code="bg"><div class="flag bg"></div><span class="country-name">Bulgaria (България)</span><span class="dial-code">+359</span></li><li class="country" data-dial-code="226" data-country-code="bf"><div class="flag bf"></div><span class="country-name">Burkina Faso</span><span class="dial-code">+226</span></li><li class="country" data-dial-code="257" data-country-code="bi"><div class="flag bi"></div><span class="country-name">Burundi (Uburundi)</span><span class="dial-code">+257</span></li><li class="country" data-dial-code="855" data-country-code="kh"><div class="flag kh"></div><span class="country-name">Cambodia (កម្ពុជា)</span><span class="dial-code">+855</span></li><li class="country" data-dial-code="237" data-country-code="cm"><div class="flag cm"></div><span class="country-name">Cameroon (Cameroun)</span><span class="dial-code">+237</span></li><li class="country" data-dial-code="1" data-country-code="ca"><div class="flag ca"></div><span class="country-name">Canada</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="238" data-country-code="cv"><div class="flag cv"></div><span class="country-name">Cape Verde (Kabu Verdi)</span><span class="dial-code">+238</span></li><li class="country" data-dial-code="599" data-country-code="bq"><div class="flag bq"></div><span class="country-name">Caribbean Netherlands</span><span class="dial-code">+599</span></li><li class="country" data-dial-code="1345" data-country-code="ky"><div class="flag ky"></div><span class="country-name">Cayman Islands</span><span class="dial-code">+1345</span></li><li class="country" data-dial-code="236" data-country-code="cf"><div class="flag cf"></div><span class="country-name">Central African Republic (République centrafricaine)</span><span class="dial-code">+236</span></li><li class="country" data-dial-code="235" data-country-code="td"><div class="flag td"></div><span class="country-name">Chad (Tchad)</span><span class="dial-code">+235</span></li><li class="country" data-dial-code="56" data-country-code="cl"><div class="flag cl"></div><span class="country-name">Chile</span><span class="dial-code">+56</span></li><li class="country" data-dial-code="86" data-country-code="cn"><div class="flag cn"></div><span class="country-name">China (中国)</span><span class="dial-code">+86</span></li><li class="country" data-dial-code="57" data-country-code="co"><div class="flag co"></div><span class="country-name">Colombia</span><span class="dial-code">+57</span></li><li class="country" data-dial-code="269" data-country-code="km"><div class="flag km"></div><span class="country-name">Comoros (‫جزر القمر‬‎)</span><span class="dial-code">+269</span></li><li class="country" data-dial-code="243" data-country-code="cd"><div class="flag cd"></div><span class="country-name">Congo (DRC) (Jamhuri ya Kidemokrasia ya Kongo)</span><span class="dial-code">+243</span></li><li class="country" data-dial-code="242" data-country-code="cg"><div class="flag cg"></div><span class="country-name">Congo (Republic) (Congo-Brazzaville)</span><span class="dial-code">+242</span></li><li class="country" data-dial-code="682" data-country-code="ck"><div class="flag ck"></div><span class="country-name">Cook Islands</span><span class="dial-code">+682</span></li><li class="country" data-dial-code="506" data-country-code="cr"><div class="flag cr"></div><span class="country-name">Costa Rica</span><span class="dial-code">+506</span></li><li class="country" data-dial-code="225" data-country-code="ci"><div class="flag ci"></div><span class="country-name">Côte d’Ivoire</span><span class="dial-code">+225</span></li><li class="country" data-dial-code="385" data-country-code="hr"><div class="flag hr"></div><span class="country-name">Croatia (Hrvatska)</span><span class="dial-code">+385</span></li><li class="country" data-dial-code="53" data-country-code="cu"><div class="flag cu"></div><span class="country-name">Cuba</span><span class="dial-code">+53</span></li><li class="country" data-dial-code="599" data-country-code="cw"><div class="flag cw"></div><span class="country-name">Curaçao</span><span class="dial-code">+599</span></li><li class="country" data-dial-code="357" data-country-code="cy"><div class="flag cy"></div><span class="country-name">Cyprus (Κύπρος)</span><span class="dial-code">+357</span></li><li class="country" data-dial-code="420" data-country-code="cz"><div class="flag cz"></div><span class="country-name">Czech Republic (Česká republika)</span><span class="dial-code">+420</span></li><li class="country" data-dial-code="45" data-country-code="dk"><div class="flag dk"></div><span class="country-name">Denmark (Danmark)</span><span class="dial-code">+45</span></li><li class="country" data-dial-code="253" data-country-code="dj"><div class="flag dj"></div><span class="country-name">Djibouti</span><span class="dial-code">+253</span></li><li class="country" data-dial-code="1767" data-country-code="dm"><div class="flag dm"></div><span class="country-name">Dominica</span><span class="dial-code">+1767</span></li><li class="country" data-dial-code="1" data-country-code="do"><div class="flag do"></div><span class="country-name">Dominican Republic (República Dominicana)</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="593" data-country-code="ec"><div class="flag ec"></div><span class="country-name">Ecuador</span><span class="dial-code">+593</span></li><li class="country" data-dial-code="20" data-country-code="eg"><div class="flag eg"></div><span class="country-name">Egypt (‫مصر‬‎)</span><span class="dial-code">+20</span></li><li class="country" data-dial-code="503" data-country-code="sv"><div class="flag sv"></div><span class="country-name">El Salvador</span><span class="dial-code">+503</span></li><li class="country" data-dial-code="240" data-country-code="gq"><div class="flag gq"></div><span class="country-name">Equatorial Guinea (Guinea Ecuatorial)</span><span class="dial-code">+240</span></li><li class="country" data-dial-code="291" data-country-code="er"><div class="flag er"></div><span class="country-name">Eritrea</span><span class="dial-code">+291</span></li><li class="country" data-dial-code="372" data-country-code="ee"><div class="flag ee"></div><span class="country-name">Estonia (Eesti)</span><span class="dial-code">+372</span></li><li class="country" data-dial-code="251" data-country-code="et"><div class="flag et"></div><span class="country-name">Ethiopia</span><span class="dial-code">+251</span></li><li class="country" data-dial-code="500" data-country-code="fk"><div class="flag fk"></div><span class="country-name">Falkland Islands (Islas Malvinas)</span><span class="dial-code">+500</span></li><li class="country" data-dial-code="298" data-country-code="fo"><div class="flag fo"></div><span class="country-name">Faroe Islands (Føroyar)</span><span class="dial-code">+298</span></li><li class="country" data-dial-code="679" data-country-code="fj"><div class="flag fj"></div><span class="country-name">Fiji</span><span class="dial-code">+679</span></li><li class="country" data-dial-code="358" data-country-code="fi"><div class="flag fi"></div><span class="country-name">Finland (Suomi)</span><span class="dial-code">+358</span></li><li class="country" data-dial-code="33" data-country-code="fr"><div class="flag fr"></div><span class="country-name">France</span><span class="dial-code">+33</span></li><li class="country" data-dial-code="594" data-country-code="gf"><div class="flag gf"></div><span class="country-name">French Guiana (Guyane française)</span><span class="dial-code">+594</span></li><li class="country" data-dial-code="689" data-country-code="pf"><div class="flag pf"></div><span class="country-name">French Polynesia (Polynésie française)</span><span class="dial-code">+689</span></li><li class="country" data-dial-code="241" data-country-code="ga"><div class="flag ga"></div><span class="country-name">Gabon</span><span class="dial-code">+241</span></li><li class="country" data-dial-code="220" data-country-code="gm"><div class="flag gm"></div><span class="country-name">Gambia</span><span class="dial-code">+220</span></li><li class="country" data-dial-code="995" data-country-code="ge"><div class="flag ge"></div><span class="country-name">Georgia (საქართველო)</span><span class="dial-code">+995</span></li><li class="country" data-dial-code="49" data-country-code="de"><div class="flag de"></div><span class="country-name">Germany (Deutschland)</span><span class="dial-code">+49</span></li><li class="country" data-dial-code="233" data-country-code="gh"><div class="flag gh"></div><span class="country-name">Ghana (Gaana)</span><span class="dial-code">+233</span></li><li class="country" data-dial-code="350" data-country-code="gi"><div class="flag gi"></div><span class="country-name">Gibraltar</span><span class="dial-code">+350</span></li><li class="country" data-dial-code="30" data-country-code="gr"><div class="flag gr"></div><span class="country-name">Greece (Ελλάδα)</span><span class="dial-code">+30</span></li><li class="country" data-dial-code="299" data-country-code="gl"><div class="flag gl"></div><span class="country-name">Greenland (Kalaallit Nunaat)</span><span class="dial-code">+299</span></li><li class="country" data-dial-code="1473" data-country-code="gd"><div class="flag gd"></div><span class="country-name">Grenada</span><span class="dial-code">+1473</span></li><li class="country" data-dial-code="590" data-country-code="gp"><div class="flag gp"></div><span class="country-name">Guadeloupe</span><span class="dial-code">+590</span></li><li class="country" data-dial-code="1671" data-country-code="gu"><div class="flag gu"></div><span class="country-name">Guam</span><span class="dial-code">+1671</span></li><li class="country" data-dial-code="502" data-country-code="gt"><div class="flag gt"></div><span class="country-name">Guatemala</span><span class="dial-code">+502</span></li><li class="country" data-dial-code="224" data-country-code="gn"><div class="flag gn"></div><span class="country-name">Guinea (Guinée)</span><span class="dial-code">+224</span></li><li class="country" data-dial-code="245" data-country-code="gw"><div class="flag gw"></div><span class="country-name">Guinea-Bissau (Guiné Bissau)</span><span class="dial-code">+245</span></li><li class="country" data-dial-code="592" data-country-code="gy"><div class="flag gy"></div><span class="country-name">Guyana</span><span class="dial-code">+592</span></li><li class="country" data-dial-code="509" data-country-code="ht"><div class="flag ht"></div><span class="country-name">Haiti</span><span class="dial-code">+509</span></li><li class="country" data-dial-code="504" data-country-code="hn"><div class="flag hn"></div><span class="country-name">Honduras</span><span class="dial-code">+504</span></li><li class="country" data-dial-code="852" data-country-code="hk"><div class="flag hk"></div><span class="country-name">Hong Kong (香港)</span><span class="dial-code">+852</span></li><li class="country" data-dial-code="36" data-country-code="hu"><div class="flag hu"></div><span class="country-name">Hungary (Magyarország)</span><span class="dial-code">+36</span></li><li class="country" data-dial-code="354" data-country-code="is"><div class="flag is"></div><span class="country-name">Iceland (Ísland)</span><span class="dial-code">+354</span></li><li class="country active" data-dial-code="91" data-country-code="in"><div class="flag in"></div><span class="country-name">India (भारत)</span><span class="dial-code">+91</span></li><li class="country" data-dial-code="62" data-country-code="id"><div class="flag id"></div><span class="country-name">Indonesia</span><span class="dial-code">+62</span></li><li class="country" data-dial-code="98" data-country-code="ir"><div class="flag ir"></div><span class="country-name">Iran (‫ایران‬‎)</span><span class="dial-code">+98</span></li><li class="country" data-dial-code="964" data-country-code="iq"><div class="flag iq"></div><span class="country-name">Iraq (‫العراق‬‎)</span><span class="dial-code">+964</span></li><li class="country" data-dial-code="353" data-country-code="ie"><div class="flag ie"></div><span class="country-name">Ireland</span><span class="dial-code">+353</span></li><li class="country" data-dial-code="972" data-country-code="il"><div class="flag il"></div><span class="country-name">Israel (‫ישראל‬‎)</span><span class="dial-code">+972</span></li><li class="country" data-dial-code="39" data-country-code="it"><div class="flag it"></div><span class="country-name">Italy (Italia)</span><span class="dial-code">+39</span></li><li class="country" data-dial-code="1876" data-country-code="jm"><div class="flag jm"></div><span class="country-name">Jamaica</span><span class="dial-code">+1876</span></li><li class="country" data-dial-code="81" data-country-code="jp"><div class="flag jp"></div><span class="country-name">Japan (日本)</span><span class="dial-code">+81</span></li><li class="country" data-dial-code="962" data-country-code="jo"><div class="flag jo"></div><span class="country-name">Jordan (‫الأردن‬‎)</span><span class="dial-code">+962</span></li><li class="country" data-dial-code="7" data-country-code="kz"><div class="flag kz"></div><span class="country-name">Kazakhstan (Казахстан)</span><span class="dial-code">+7</span></li><li class="country" data-dial-code="254" data-country-code="ke"><div class="flag ke"></div><span class="country-name">Kenya</span><span class="dial-code">+254</span></li><li class="country" data-dial-code="686" data-country-code="ki"><div class="flag ki"></div><span class="country-name">Kiribati</span><span class="dial-code">+686</span></li><li class="country" data-dial-code="965" data-country-code="kw"><div class="flag kw"></div><span class="country-name">Kuwait (‫الكويت‬‎)</span><span class="dial-code">+965</span></li><li class="country" data-dial-code="996" data-country-code="kg"><div class="flag kg"></div><span class="country-name">Kyrgyzstan (Кыргызстан)</span><span class="dial-code">+996</span></li><li class="country" data-dial-code="856" data-country-code="la"><div class="flag la"></div><span class="country-name">Laos (ລາວ)</span><span class="dial-code">+856</span></li><li class="country" data-dial-code="371" data-country-code="lv"><div class="flag lv"></div><span class="country-name">Latvia (Latvija)</span><span class="dial-code">+371</span></li><li class="country" data-dial-code="961" data-country-code="lb"><div class="flag lb"></div><span class="country-name">Lebanon (‫لبنان‬‎)</span><span class="dial-code">+961</span></li><li class="country" data-dial-code="266" data-country-code="ls"><div class="flag ls"></div><span class="country-name">Lesotho</span><span class="dial-code">+266</span></li><li class="country" data-dial-code="231" data-country-code="lr"><div class="flag lr"></div><span class="country-name">Liberia</span><span class="dial-code">+231</span></li><li class="country" data-dial-code="218" data-country-code="ly"><div class="flag ly"></div><span class="country-name">Libya (‫ليبيا‬‎)</span><span class="dial-code">+218</span></li><li class="country" data-dial-code="423" data-country-code="li"><div class="flag li"></div><span class="country-name">Liechtenstein</span><span class="dial-code">+423</span></li><li class="country" data-dial-code="370" data-country-code="lt"><div class="flag lt"></div><span class="country-name">Lithuania (Lietuva)</span><span class="dial-code">+370</span></li><li class="country" data-dial-code="352" data-country-code="lu"><div class="flag lu"></div><span class="country-name">Luxembourg</span><span class="dial-code">+352</span></li><li class="country" data-dial-code="853" data-country-code="mo"><div class="flag mo"></div><span class="country-name">Macau (澳門)</span><span class="dial-code">+853</span></li><li class="country" data-dial-code="389" data-country-code="mk"><div class="flag mk"></div><span class="country-name">Macedonia (FYROM) (Македонија)</span><span class="dial-code">+389</span></li><li class="country" data-dial-code="261" data-country-code="mg"><div class="flag mg"></div><span class="country-name">Madagascar (Madagasikara)</span><span class="dial-code">+261</span></li><li class="country" data-dial-code="265" data-country-code="mw"><div class="flag mw"></div><span class="country-name">Malawi</span><span class="dial-code">+265</span></li><li class="country" data-dial-code="60" data-country-code="my"><div class="flag my"></div><span class="country-name">Malaysia</span><span class="dial-code">+60</span></li><li class="country" data-dial-code="960" data-country-code="mv"><div class="flag mv"></div><span class="country-name">Maldives</span><span class="dial-code">+960</span></li><li class="country" data-dial-code="223" data-country-code="ml"><div class="flag ml"></div><span class="country-name">Mali</span><span class="dial-code">+223</span></li><li class="country" data-dial-code="356" data-country-code="mt"><div class="flag mt"></div><span class="country-name">Malta</span><span class="dial-code">+356</span></li><li class="country" data-dial-code="692" data-country-code="mh"><div class="flag mh"></div><span class="country-name">Marshall Islands</span><span class="dial-code">+692</span></li><li class="country" data-dial-code="596" data-country-code="mq"><div class="flag mq"></div><span class="country-name">Martinique</span><span class="dial-code">+596</span></li><li class="country" data-dial-code="222" data-country-code="mr"><div class="flag mr"></div><span class="country-name">Mauritania (‫موريتانيا‬‎)</span><span class="dial-code">+222</span></li><li class="country" data-dial-code="230" data-country-code="mu"><div class="flag mu"></div><span class="country-name">Mauritius (Moris)</span><span class="dial-code">+230</span></li><li class="country" data-dial-code="52" data-country-code="mx"><div class="flag mx"></div><span class="country-name">Mexico (México)</span><span class="dial-code">+52</span></li><li class="country" data-dial-code="691" data-country-code="fm"><div class="flag fm"></div><span class="country-name">Micronesia</span><span class="dial-code">+691</span></li><li class="country" data-dial-code="373" data-country-code="md"><div class="flag md"></div><span class="country-name">Moldova (Republica Moldova)</span><span class="dial-code">+373</span></li><li class="country" data-dial-code="377" data-country-code="mc"><div class="flag mc"></div><span class="country-name">Monaco</span><span class="dial-code">+377</span></li><li class="country" data-dial-code="976" data-country-code="mn"><div class="flag mn"></div><span class="country-name">Mongolia (Монгол)</span><span class="dial-code">+976</span></li><li class="country" data-dial-code="382" data-country-code="me"><div class="flag me"></div><span class="country-name">Montenegro (Crna Gora)</span><span class="dial-code">+382</span></li><li class="country" data-dial-code="1664" data-country-code="ms"><div class="flag ms"></div><span class="country-name">Montserrat</span><span class="dial-code">+1664</span></li><li class="country" data-dial-code="212" data-country-code="ma"><div class="flag ma"></div><span class="country-name">Morocco (‫المغرب‬‎)</span><span class="dial-code">+212</span></li><li class="country" data-dial-code="258" data-country-code="mz"><div class="flag mz"></div><span class="country-name">Mozambique (Moçambique)</span><span class="dial-code">+258</span></li><li class="country" data-dial-code="95" data-country-code="mm"><div class="flag mm"></div><span class="country-name">Myanmar (Burma) (မြန်မာ)</span><span class="dial-code">+95</span></li><li class="country" data-dial-code="264" data-country-code="na"><div class="flag na"></div><span class="country-name">Namibia (Namibië)</span><span class="dial-code">+264</span></li><li class="country" data-dial-code="674" data-country-code="nr"><div class="flag nr"></div><span class="country-name">Nauru</span><span class="dial-code">+674</span></li><li class="country" data-dial-code="977" data-country-code="np"><div class="flag np"></div><span class="country-name">Nepal (नेपाल)</span><span class="dial-code">+977</span></li><li class="country" data-dial-code="31" data-country-code="nl"><div class="flag nl"></div><span class="country-name">Netherlands (Nederland)</span><span class="dial-code">+31</span></li><li class="country" data-dial-code="687" data-country-code="nc"><div class="flag nc"></div><span class="country-name">New Caledonia (Nouvelle-Calédonie)</span><span class="dial-code">+687</span></li><li class="country" data-dial-code="64" data-country-code="nz"><div class="flag nz"></div><span class="country-name">New Zealand</span><span class="dial-code">+64</span></li><li class="country" data-dial-code="505" data-country-code="ni"><div class="flag ni"></div><span class="country-name">Nicaragua</span><span class="dial-code">+505</span></li><li class="country" data-dial-code="227" data-country-code="ne"><div class="flag ne"></div><span class="country-name">Niger (Nijar)</span><span class="dial-code">+227</span></li><li class="country" data-dial-code="234" data-country-code="ng"><div class="flag ng"></div><span class="country-name">Nigeria</span><span class="dial-code">+234</span></li><li class="country" data-dial-code="683" data-country-code="nu"><div class="flag nu"></div><span class="country-name">Niue</span><span class="dial-code">+683</span></li><li class="country" data-dial-code="672" data-country-code="nf"><div class="flag nf"></div><span class="country-name">Norfolk Island</span><span class="dial-code">+672</span></li><li class="country" data-dial-code="850" data-country-code="kp"><div class="flag kp"></div><span class="country-name">North Korea (조선 민주주의 인민 공화국)</span><span class="dial-code">+850</span></li><li class="country" data-dial-code="1670" data-country-code="mp"><div class="flag mp"></div><span class="country-name">Northern Mariana Islands</span><span class="dial-code">+1670</span></li><li class="country" data-dial-code="47" data-country-code="no"><div class="flag no"></div><span class="country-name">Norway (Norge)</span><span class="dial-code">+47</span></li><li class="country" data-dial-code="968" data-country-code="om"><div class="flag om"></div><span class="country-name">Oman (‫عُمان‬‎)</span><span class="dial-code">+968</span></li><li class="country" data-dial-code="92" data-country-code="pk"><div class="flag pk"></div><span class="country-name">Pakistan (‫پاکستان‬‎)</span><span class="dial-code">+92</span></li><li class="country" data-dial-code="680" data-country-code="pw"><div class="flag pw"></div><span class="country-name">Palau</span><span class="dial-code">+680</span></li><li class="country" data-dial-code="970" data-country-code="ps"><div class="flag ps"></div><span class="country-name">Palestine (‫فلسطين‬‎)</span><span class="dial-code">+970</span></li><li class="country" data-dial-code="507" data-country-code="pa"><div class="flag pa"></div><span class="country-name">Panama (Panamá)</span><span class="dial-code">+507</span></li><li class="country" data-dial-code="675" data-country-code="pg"><div class="flag pg"></div><span class="country-name">Papua New Guinea</span><span class="dial-code">+675</span></li><li class="country" data-dial-code="595" data-country-code="py"><div class="flag py"></div><span class="country-name">Paraguay</span><span class="dial-code">+595</span></li><li class="country" data-dial-code="51" data-country-code="pe"><div class="flag pe"></div><span class="country-name">Peru (Perú)</span><span class="dial-code">+51</span></li><li class="country" data-dial-code="63" data-country-code="ph"><div class="flag ph"></div><span class="country-name">Philippines</span><span class="dial-code">+63</span></li><li class="country" data-dial-code="48" data-country-code="pl"><div class="flag pl"></div><span class="country-name">Poland (Polska)</span><span class="dial-code">+48</span></li><li class="country" data-dial-code="351" data-country-code="pt"><div class="flag pt"></div><span class="country-name">Portugal</span><span class="dial-code">+351</span></li><li class="country" data-dial-code="1" data-country-code="pr"><div class="flag pr"></div><span class="country-name">Puerto Rico</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="974" data-country-code="qa"><div class="flag qa"></div><span class="country-name">Qatar (‫قطر‬‎)</span><span class="dial-code">+974</span></li><li class="country" data-dial-code="262" data-country-code="re"><div class="flag re"></div><span class="country-name">Réunion (La Réunion)</span><span class="dial-code">+262</span></li><li class="country" data-dial-code="40" data-country-code="ro"><div class="flag ro"></div><span class="country-name">Romania (România)</span><span class="dial-code">+40</span></li><li class="country" data-dial-code="7" data-country-code="ru"><div class="flag ru"></div><span class="country-name">Russia (Россия)</span><span class="dial-code">+7</span></li><li class="country" data-dial-code="250" data-country-code="rw"><div class="flag rw"></div><span class="country-name">Rwanda</span><span class="dial-code">+250</span></li><li class="country" data-dial-code="590" data-country-code="bl"><div class="flag bl"></div><span class="country-name">Saint Barthélemy (Saint-Barthélemy)</span><span class="dial-code">+590</span></li><li class="country" data-dial-code="290" data-country-code="sh"><div class="flag sh"></div><span class="country-name">Saint Helena</span><span class="dial-code">+290</span></li><li class="country" data-dial-code="1869" data-country-code="kn"><div class="flag kn"></div><span class="country-name">Saint Kitts and Nevis</span><span class="dial-code">+1869</span></li><li class="country" data-dial-code="1758" data-country-code="lc"><div class="flag lc"></div><span class="country-name">Saint Lucia</span><span class="dial-code">+1758</span></li><li class="country" data-dial-code="590" data-country-code="mf"><div class="flag mf"></div><span class="country-name">Saint Martin (Saint-Martin (partie française))</span><span class="dial-code">+590</span></li><li class="country" data-dial-code="508" data-country-code="pm"><div class="flag pm"></div><span class="country-name">Saint Pierre and Miquelon (Saint-Pierre-et-Miquelon)</span><span class="dial-code">+508</span></li><li class="country" data-dial-code="1784" data-country-code="vc"><div class="flag vc"></div><span class="country-name">Saint Vincent and the Grenadines</span><span class="dial-code">+1784</span></li><li class="country" data-dial-code="685" data-country-code="ws"><div class="flag ws"></div><span class="country-name">Samoa</span><span class="dial-code">+685</span></li><li class="country" data-dial-code="378" data-country-code="sm"><div class="flag sm"></div><span class="country-name">San Marino</span><span class="dial-code">+378</span></li><li class="country" data-dial-code="239" data-country-code="st"><div class="flag st"></div><span class="country-name">São Tomé and Príncipe (São Tomé e Príncipe)</span><span class="dial-code">+239</span></li><li class="country" data-dial-code="966" data-country-code="sa"><div class="flag sa"></div><span class="country-name">Saudi Arabia (‫المملكة العربية السعودية‬‎)</span><span class="dial-code">+966</span></li><li class="country" data-dial-code="221" data-country-code="sn"><div class="flag sn"></div><span class="country-name">Senegal (Sénégal)</span><span class="dial-code">+221</span></li><li class="country" data-dial-code="381" data-country-code="rs"><div class="flag rs"></div><span class="country-name">Serbia (Србија)</span><span class="dial-code">+381</span></li><li class="country" data-dial-code="248" data-country-code="sc"><div class="flag sc"></div><span class="country-name">Seychelles</span><span class="dial-code">+248</span></li><li class="country" data-dial-code="232" data-country-code="sl"><div class="flag sl"></div><span class="country-name">Sierra Leone</span><span class="dial-code">+232</span></li><li class="country" data-dial-code="65" data-country-code="sg"><div class="flag sg"></div><span class="country-name">Singapore</span><span class="dial-code">+65</span></li><li class="country" data-dial-code="1721" data-country-code="sx"><div class="flag sx"></div><span class="country-name">Sint Maarten</span><span class="dial-code">+1721</span></li><li class="country" data-dial-code="421" data-country-code="sk"><div class="flag sk"></div><span class="country-name">Slovakia (Slovensko)</span><span class="dial-code">+421</span></li><li class="country" data-dial-code="386" data-country-code="si"><div class="flag si"></div><span class="country-name">Slovenia (Slovenija)</span><span class="dial-code">+386</span></li><li class="country" data-dial-code="677" data-country-code="sb"><div class="flag sb"></div><span class="country-name">Solomon Islands</span><span class="dial-code">+677</span></li><li class="country" data-dial-code="252" data-country-code="so"><div class="flag so"></div><span class="country-name">Somalia (Soomaaliya)</span><span class="dial-code">+252</span></li><li class="country" data-dial-code="27" data-country-code="za"><div class="flag za"></div><span class="country-name">South Africa</span><span class="dial-code">+27</span></li><li class="country" data-dial-code="82" data-country-code="kr"><div class="flag kr"></div><span class="country-name">South Korea (대한민국)</span><span class="dial-code">+82</span></li><li class="country" data-dial-code="211" data-country-code="ss"><div class="flag ss"></div><span class="country-name">South Sudan (‫جنوب السودان‬‎)</span><span class="dial-code">+211</span></li><li class="country" data-dial-code="34" data-country-code="es"><div class="flag es"></div><span class="country-name">Spain (España)</span><span class="dial-code">+34</span></li><li class="country" data-dial-code="94" data-country-code="lk"><div class="flag lk"></div><span class="country-name">Sri Lanka (ශ්‍රී ලංකාව)</span><span class="dial-code">+94</span></li><li class="country" data-dial-code="249" data-country-code="sd"><div class="flag sd"></div><span class="country-name">Sudan (‫السودان‬‎)</span><span class="dial-code">+249</span></li><li class="country" data-dial-code="597" data-country-code="sr"><div class="flag sr"></div><span class="country-name">Suriname</span><span class="dial-code">+597</span></li><li class="country" data-dial-code="268" data-country-code="sz"><div class="flag sz"></div><span class="country-name">Swaziland</span><span class="dial-code">+268</span></li><li class="country" data-dial-code="46" data-country-code="se"><div class="flag se"></div><span class="country-name">Sweden (Sverige)</span><span class="dial-code">+46</span></li><li class="country" data-dial-code="41" data-country-code="ch"><div class="flag ch"></div><span class="country-name">Switzerland (Schweiz)</span><span class="dial-code">+41</span></li><li class="country" data-dial-code="963" data-country-code="sy"><div class="flag sy"></div><span class="country-name">Syria (‫سوريا‬‎)</span><span class="dial-code">+963</span></li><li class="country" data-dial-code="886" data-country-code="tw"><div class="flag tw"></div><span class="country-name">Taiwan (台灣)</span><span class="dial-code">+886</span></li><li class="country" data-dial-code="992" data-country-code="tj"><div class="flag tj"></div><span class="country-name">Tajikistan</span><span class="dial-code">+992</span></li><li class="country" data-dial-code="255" data-country-code="tz"><div class="flag tz"></div><span class="country-name">Tanzania</span><span class="dial-code">+255</span></li><li class="country" data-dial-code="66" data-country-code="th"><div class="flag th"></div><span class="country-name">Thailand (ไทย)</span><span class="dial-code">+66</span></li><li class="country" data-dial-code="670" data-country-code="tl"><div class="flag tl"></div><span class="country-name">Timor-Leste</span><span class="dial-code">+670</span></li><li class="country" data-dial-code="228" data-country-code="tg"><div class="flag tg"></div><span class="country-name">Togo</span><span class="dial-code">+228</span></li><li class="country" data-dial-code="690" data-country-code="tk"><div class="flag tk"></div><span class="country-name">Tokelau</span><span class="dial-code">+690</span></li><li class="country" data-dial-code="676" data-country-code="to"><div class="flag to"></div><span class="country-name">Tonga</span><span class="dial-code">+676</span></li><li class="country" data-dial-code="1868" data-country-code="tt"><div class="flag tt"></div><span class="country-name">Trinidad and Tobago</span><span class="dial-code">+1868</span></li><li class="country" data-dial-code="216" data-country-code="tn"><div class="flag tn"></div><span class="country-name">Tunisia (‫تونس‬‎)</span><span class="dial-code">+216</span></li><li class="country" data-dial-code="90" data-country-code="tr"><div class="flag tr"></div><span class="country-name">Turkey (Türkiye)</span><span class="dial-code">+90</span></li><li class="country" data-dial-code="993" data-country-code="tm"><div class="flag tm"></div><span class="country-name">Turkmenistan</span><span class="dial-code">+993</span></li><li class="country" data-dial-code="1649" data-country-code="tc"><div class="flag tc"></div><span class="country-name">Turks and Caicos Islands</span><span class="dial-code">+1649</span></li><li class="country" data-dial-code="688" data-country-code="tv"><div class="flag tv"></div><span class="country-name">Tuvalu</span><span class="dial-code">+688</span></li><li class="country" data-dial-code="1340" data-country-code="vi"><div class="flag vi"></div><span class="country-name">U.S. Virgin Islands</span><span class="dial-code">+1340</span></li><li class="country" data-dial-code="256" data-country-code="ug"><div class="flag ug"></div><span class="country-name">Uganda</span><span class="dial-code">+256</span></li><li class="country" data-dial-code="380" data-country-code="ua"><div class="flag ua"></div><span class="country-name">Ukraine (Україна)</span><span class="dial-code">+380</span></li><li class="country" data-dial-code="971" data-country-code="ae"><div class="flag ae"></div><span class="country-name">United Arab Emirates (‫الإمارات العربية المتحدة‬‎)</span><span class="dial-code">+971</span></li><li class="country" data-dial-code="44" data-country-code="gb"><div class="flag gb"></div><span class="country-name">United Kingdom</span><span class="dial-code">+44</span></li><li class="country" data-dial-code="1" data-country-code="us"><div class="flag us"></div><span class="country-name">United States</span><span class="dial-code">+1</span></li><li class="country" data-dial-code="598" data-country-code="uy"><div class="flag uy"></div><span class="country-name">Uruguay</span><span class="dial-code">+598</span></li><li class="country" data-dial-code="998" data-country-code="uz"><div class="flag uz"></div><span class="country-name">Uzbekistan (Oʻzbekiston)</span><span class="dial-code">+998</span></li><li class="country" data-dial-code="678" data-country-code="vu"><div class="flag vu"></div><span class="country-name">Vanuatu</span><span class="dial-code">+678</span></li><li class="country" data-dial-code="39" data-country-code="va"><div class="flag va"></div><span class="country-name">Vatican City (Città del Vaticano)</span><span class="dial-code">+39</span></li><li class="country" data-dial-code="58" data-country-code="ve"><div class="flag ve"></div><span class="country-name">Venezuela</span><span class="dial-code">+58</span></li><li class="country" data-dial-code="84" data-country-code="vn"><div class="flag vn"></div><span class="country-name">Vietnam (Việt Nam)</span><span class="dial-code">+84</span></li><li class="country" data-dial-code="681" data-country-code="wf"><div class="flag wf"></div><span class="country-name">Wallis and Futuna</span><span class="dial-code">+681</span></li><li class="country" data-dial-code="967" data-country-code="ye"><div class="flag ye"></div><span class="country-name">Yemen (‫اليمن‬‎)</span><span class="dial-code">+967</span></li><li class="country" data-dial-code="260" data-country-code="zm"><div class="flag zm"></div><span class="country-name">Zambia</span><span class="dial-code">+260</span></li><li class="country" data-dial-code="263" data-country-code="zw"><div class="flag zw"></div><span class="country-name">Zimbabwe</span><span class="dial-code">+263</span></li></ul></div></div><!-- end ngIf: opts.effectiveSecondarySupportNumber --></div>

                                                <div class="pull-right">
                                                    <button type="button" class="btn btn-link btn-sm _prev-section _disableButton ng-isolate-scope ng-hide" ng-click="previousSection()" ng-show="(showPrevSection) &amp;&amp; (isFirstQuestion || isMultipleQuestions)" i18-text="" i18-tag="TEST_PREV_SECT">Prev Section</button>
                                                    <button type="button" class="btn btn-link btn-sm _disableButton ng-isolate-scope" ng-disabled="isFirstQuestion" ng-hide="isFirstQuestion || isMultipleQuestions" i18-text="" i18-tag="TEST_PREV_QUES" ng-click="toQuestion('prev')">Prev Question</button>
                                                    <button type="button" class="btn btn-primary btn-sm next _disableButton ng-isolate-scope ng-hide" ng-disabled="isLastQuestion" ng-hide="isLastQuestion || isMultipleQuestions" i18-text="" i18-tag="TEST_NEXT_QUES" ng-click="toQuestion('next')" disabled="disabled">Next Question</button>
                                                    <button type="button" class="btn btn-success btn-sm _next-section _disableButton ng-isolate-scope" ng-click="nextSection()" ng-show="(showNextSection) &amp;&amp; (isLastQuestion || isMultipleQuestions)" i18-text="" i18-tag="TEST_NEXT_SECT">Next Section</button>
                                                </div>
                                            </div>
                                            <div class="container-fluid visible-xs visible-sm clearfix">
                                                <div class="col-xs-4">
                                                    <button type="button" class="btn btn-link btn-sm pull-left _prev-section ng-isolate-scope ng-hide" ng-click="previousSection()" ng-show="showPrevSection &amp;&amp; isFirstQuestion" i18-text="" i18-tag="TEST_PREV_SECT">Prev Section</button>
                                                    <button type="button" class="btn btn-link btn-sm pull-left ng-isolate-scope" ng-disabled="isFirstQuestion" ng-hide="isFirstQuestion" i18-text="" i18-tag="TEST_PREV_QUES" ng-click="toQuestion('prev')">Prev Question</button>
                                                </div>
                                                <div class="col-xs-4">
                                                    <!-- ngIf: opts.visualProctoring -->
        </div>
                                                <div class="col-xs-4">
                                                    <button type="button" class="btn btn-primary btn-sm next pull-right ng-isolate-scope ng-hide" ng-disabled="isLastQuestion" ng-hide="isLastQuestion" i18-text="" i18-tag="TEST_NEXT_QUES" ng-click="toQuestion('next')" disabled="disabled">Next Question</button>
                                                    <button type="button" class="btn btn-success btn-sm pull-right _next-section ng-isolate-scope" ng-click="nextSection()" ng-show="showNextSection &amp;&amp; isLastQuestion" i18-text="" i18-tag="TEST_NEXT_SECT">Next Section</button>
                                                </div>
                                            </div>
                                        </div>

                                        <div id="procA" class="ng-scope"></div>


                                        <!-- ngIf: !isEmptyObject(onlineAdmins) --><div class="chat-window-container ng-scope" ng-class="{'test-paused' : isTestPaused}" data-ng-if="!isEmptyObject(onlineAdmins)">
                                            <div chat-directive="" group-id="groupId" unique-id="uniqueId" is-test-paused="isTestPaused" client-id="opts.clientId" auto-chat-popup="opts.autoChatPopup" class="inline"></div>
                                        </div><!-- end ngIf: !isEmptyObject(onlineAdmins) -->

<script type="text/template" id="applet-help-popup" class="ng-scope">
                                            <div class="white-centered-box">
                                                <p class="bold italic pull-left"><@</p>

                                                <div id="img3" class="indicator"></div>
                                                <div class="clearer"></div>
                                                <p><@</p>

                                                <p>
                                                    1. <@<b><@</b>.<br>

                                                        <div id="img2"></div>
        </p>
                                                    <p>
                                                        2. <@<b><@</b>
                                                        <@<b><@</b>.<br>

                                                            <div id="img1"></div>
        </p>
    </div>
</script>

                                                <script type="text/template" id="proctoring-template" class="ng-scope">
                                                    <applet id="comm" width="1" height="1" code="<@= appClass @>" archive="<@= appletUrl @>" MAYSCRIPT>
                                                        <param name="host" value="<@= hostUrl @>" />
                                                        <param name="messageReceivingPort" value="<@= messageReceivingPort @>" />
                                                        <param name="messageSendingPort" value="<@= messageSendingPort @>" />
                                                        <param name="iam" value="<@= cInfo @>" />
                                                        <param name="messageReceived" value="<@= messageReceived @>" />
                                                    </applet>
                                                </script>

                                                <script type="text/template" id="camera-configure-template" class="ng-scope">
                                                    <div>
                                                        <p><@</p>
                                                        <br />
                                                        <div id='proctorDiv' style='text-align: center;'></div>
                                                        <ol style='margin:10px 10px 0 20px;list-style-type:decimal;line-height:1.4em;'>
                                                            <li><@</li>
                                                            <li><@</li>
                                                            <li><@</li>
                                                            <li><@</li>
                                                        </ol>
                                                    </div>
                                                </script>

                                                <script type="text/template" id="finish-test-template" class="ng-scope">

                                                    <div class="row">
                                                        <div class="col-md-10">
                                                            <@{ @>
                <p class="muted"><@</p>
                                                            <@{ @>
                <p class="muted"><@</p>
                                                            <@ } @>

            <p class="muted"><@</p>

                                                            <div class="_finish-test-modal multi-bar clearfix">
                                                                <@{ @>
                <div class="attemptedSection pull-left" style="width: <@= total.attemptedWidth @>%;" aria-label="<@= total.questionAttempted @> Attempted Question">
                                                                    <@= total.questionAttempted @>
                </div>
                                                                <@ } @>
                <@{ @>
                <div class="markedSection pull-left" style="width: <@= total.markedWidth @>%;" aria-label="<@= total.marked @> Question To Revisit">
                                                                    <@= total.marked @>
                </div>
                                                                <@ } @>
                <@{ @>
                <div class="unAttemptedSection pull-left" style="width: <@= total.unattemptedWidth @>%;" aria-label="<@= total.questionUnattempted @> Unattempted Question">
                                                                    <@= total.questionUnattempted @>
                </div>
                                                                <@ } @>
            </div>
                                                            <ul id="sectionSummary" class="sectionSummary">
                                                                <@{ @>
                    <li class="row multi-bar-header">
                                                                    <div class="col-md-4"><strong><@<@</strong></div>
                                                                    <div class="col-md-8 text-center sm-text-left"><@</div>
                                                                </li>

                                                                <@{  @>
                        <li class="row multi-bar">
                                                                    <div class="col-md-3 sm-text-left" title="<@= value.sectionName @>">
                                                                        <a data-index="<@= index @>" class="<@= (value.canBeNavigatedTo && !isFixedSectionOrder) ? '_section' : 'muted' @>" href="javascript:void(0);"><@</a>
                                                                    </div>
                                                                    <div class="col-md-9">
                                                                        <div class="clearfix">
                                                                            <@{ @>
                                    <div class="pull-left attemptedSection" style="width: <@= value.questions.attemptedWidth @>%;" aria-label="<@= value.questions.questionAttempted @> Attempted QUestions">
                                                                                <@= value.questions.questionAttempted @>
                                    </div>
                                                                            <@ } @>
                                    <@{ @>
                                    <div class="pull-left markedSection" style="width: <@= value.questions.markedWidth @>%;" aria-label="<@= value.questions.marked @> Questions to revisit">
                                                                                <@= value.questions.marked @>
                                    </div>
                                                                            <@ } @>
                                    <@{ @>
                                    <div class="pull-left unAttemptedSection" style="width: <@= value.questions.unattemptedWidth @>%;" aria-label="<@= value.questions.questionUnattempted @> Unattempted Questions">
                                                                                <@= value.questions.questionUnattempted @>
                                    </div>
                                                                            <@ } @>
                                </div>
                                                                    </div>
                                                                </li>
                                                                <@ }); @>
                <@ } @>
            </ul>
                                                        </div>
                                                    </div>

                                                </script>




                                                <script type="text/template" id="finish-section-template" class="ng-scope">
                                                    <p><@</p>
                                                    <p><@</p>
                                                </script>

                                                <script type="text/template" id="testTakers-instruction-template" class="ng-scope">
                                                    <@{ @>
        <p><@</p>
                                                    <@ } @>
    <p><strong><@</strong></p>
                                                    <ol>
                                                        <li><@</li>
                                                        <li><@</li>
                                                        <li><@</li>
                                                    </ol>
                                                </script>

                                                <script type="text/ng-template" id="image-error-loading-template" class="ng-scope">
                                                    <div class="image-loading-container text-center">
                                                        <div ng-hide="item.questionImages.total == item.questionImages.counter.completed">
                                                            <h3 i18-text i18-tag="TEST_MSG_LOADING"></h3>
                                                            <p i18-text i18-tag="TEST_IMG_LOADING"></p>
                                                        </div>
                                                        <div ng-if="item.questionImages.counter.error > 0">
                                                            <h3 i18-text i18-tag="TEST_IMG_LOADING_FAILED"></h3>
                                                            <p i18-text i18-tag="TEST_IMG_RELOAD"></p>
                                                        </div>
                                                        <div class="error-container-fluid row" ng-class="{'light' : (!item.questionImages.counter.error > 0)}">
                                                            <div class="col-md-3 col-md-offset-3">
                                                                <div class="error-block" i18-text i18-tag="TEST_IMG_ATTEMPT_OTHERS"></div>
                                                                <div class="block-separator">
                                                                    <span i18-text i18-tag="TEST_IMG_OR"></span>
                                                                </div>
                                                            </div>
                                                            <div class="col-md-3">
                                                                <div class="error-block" i18-text i18-tag="TEST_IMG_CLOSE"></div>
                                                            </div>
                                                        </div>
                                                        <button type="button" class="btn btn-success" ng-click="item.questionImages.onImageLoadRetry(item.Index)" ng-disabled="!(item.questionImages.counter.error > 0)" i18-text i18-tag="TEST_SS_TEXT_2"></button>
                                                    </div>
                                                </script>


                                                <script type="text/ng-template" id="file-upload-template" class="ng-scope">
                                                    <div class="file-uploading-modal" id="file-upload-modal">
                                                        <div class="file-upload-data name inline"><@</div>
                                                        <div class="file-upload-data text-right inline _file-percentage-data"><span class="_uploaded-size"><@</span> / <span class="_total-size"> <@</span></div>
                                                        <div class="progress-bar-container-fluid">
                                                            <div class="diagnostic-progress-bar blue _progress-bar"></div>
                                                        </div>
                                                    </div>
                                                </script>

                                                <script type="text/ng-template" id="file-upload-delete-template" class="ng-scope">
                                                    <p><@</p>
                                                </script>

                                                <script type="text/ng-template" id="question-header-template" class="ng-scope">
                                                    <div class="{{item.twoColumnLayout ? '' :  '_sci-calc-top'}} breadcrumb">
                                                        <span class="filter-flag {{item.IsFlagged ? 'revisit-flag' : item.IsAttempted ? 'attempted-flag': 'unattempted-flag'}}"></span>
                                                        <h2 class="font-bold sr"><span i18-text i18-tag="TEST_QUESTION"></span> # {{ item.Index + 1 }}</h2>
                                                        <a ng-if="!testWindow.IsPracticeTest" class="{{item.twoColumnLayout ? 'pull-right': ''}} muted {{item.twoColumnLayout ? 'control-right' : 'control-left'}}" ng-click="flagForReview(item)" >
                                                            <span class="icon-revisit" aria-label="{{item.IsFlagged ? 'Remove from Revisit.' : 'Click if you wish to revisit this.'}}" ng-class="{'flagged': item.IsFlagged}" i18-text i18-title="{{item.IsFlagged ? '' : 'TEST_MCQ_REVIEW_MSG'}}" i18-tag="TEST_MCQ_REVIEW"></span><i ng-if="item.IsFlagged" class="remove-icon">&times;</i>
                                                        </a>
                                                        <div class="new-calc-div pull-right" ng-if="!item.twoColumnLayout && testWindow.Assessment.UiSettings.ShowScientificCalculator">
                                                            <a calculator class="_calculator pull-right">
                                                                <img ng-src='{{calculatorImage}}' />
                                                                <!--input type="text" class="calc-input" placeholder="Calculator" calculator readonly="readonly"/ -->
            </a>
                                                        </div>
                                                    </div>
                                                </script>

                                                <script type="text/ng-template" id="sm-instruction-template" class="ng-scope">
                                                    <ul class="nav nav-tabs sm-instruction-popup">
                                                        <li class="active"><a href=".tab1" data-toggle="tab"><@</a></li>
                                                        <li><a href=".tab2" data-toggle="tab"><@</a></li>
                                                    </ul>
                                                    <div class="tab-content">
                                                        <div class="tab-pane active tab1">
                                                            <@= sInstructions @>
        </div>
                                                        <div class="tab-pane tab2">
                                                            <@= aInstructions @>
        </div>
                                                    </div>
                                                </script>

                                                <!-- ngIf: isClientCalc -->
<!-- ngIf: !isClientCalc --><div data-ng-if="!isClientCalc" class="ng-scope">
                                                    <script type="text/ng-template" id="calculator-template">
                                                        <div class="_calc-main">
                                                            <div class="calc-display">
                                                                <span>0</span>
                                                                <div class="calc-rad">Rad</div>
                                                                <div class="calc-hold"></div>
                                                                <div class="calc-buttons">
                                                                    <div class="calc-info">?</div>
                                                                    <div class="calc-smaller">&gt;</div>
                                                                    <div class="calc-ln">.</div>
                                                                </div>
                                                            </div>
                                                            <div class="calc-left">
                                                                <div><div>2nd</div></div>
                                                                <div><div>(</div></div>
                                                                <div><div>)</div></div>
                                                                <div><div>%</div></div>
                                                                <div><div>1/x</div></div>
                                                                <div><div>x<sup>2</sup></div></div>
                                                                <div><div>x<sup>3</sup></div></div>
                                                                <div><div>y<sup>x</sup></div></div>
                                                                <div><div>x!</div></div>
                                                                <div><div>&radic;</div></div>
                                                                <div><div class="calc-radxy">
                                                                    <sup>x</sup><em>&radic;</em><span>y</span>
                                                                </div></div>
                                                                <div><div>log</div></div>
                                                                <div><div>sin</div></div>
                                                                <div><div>cos</div></div>
                                                                <div><div>tan</div></div>
                                                                <div><div>ln</div></div>
                                                                <div><div>sinh</div></div>
                                                                <div><div>cosh</div></div>
                                                                <div><div>tanh</div></div>
                                                                <div><div>e<sup>x</sup></div></div>
                                                                <div><div>Deg</div></div>
                                                                <div><div>&pi;</div></div>
                                                                <div><div>EE</div></div>
                                                                <div><div>Rand</div></div>
                                                            </div>
                                                            <div class="calc-right">
                                                                <div><div>mc</div></div>
                                                                <div><div>m+</div></div>
                                                                <div><div>m-</div></div>
                                                                <div><div>mr</div></div>
                                                                <div class="calc-brown"><div >AC</div></div>
                                                                <div class="calc-brown"><div>+/&#8211;</div></div>
                                                                <div class="calc-brown calc-f19"><div>&divide;</div></div>
                                                                <div class="calc-brown calc-f21"><div>&times;</div></div>
                                                                <div class="calc-black"><div>7</div></div>
                                                                <div class="calc-black"><div>8</div></div>
                                                                <div class="calc-black"><div>9</div></div>
                                                                <div class="calc-brown calc-f18"><div>&#8211;</div></div>
                                                                <div class="calc-black"><div>4</div></div>
                                                                <div class="calc-black"><div >5</div></div>
                                                                <div class="calc-black"><div>6</div></div>
                                                                <div class="calc-brown calc-f18"><div>+</div></div>
                                                                <div class="calc-black"><div>1</div></div>
                                                                <div class="calc-black"><div>2</div></div>
                                                                <div class="calc-black"><div>3</div></div>
                                                                <div class="calc-orange calc-eq calc-f17"><div>
                                                                    <div class="calc-down">=</div>
                                                                </div></div>
                                                                <div class="calc-black calc-zero"><div>
                                                                    <span>0</span>
                                                                </div></div>
                                                                <div class="calc-black calc-f21"><div>.</div></div>
                                                            </div>
                                                        </div>
                                                    </script>
                                                </div><!-- end ngIf: !isClientCalc -->
</div>

                                            <!-- ngIf: !isTestWindow -->

<script type="text/html" id="dialogue-content-box">
                                                <div class="modal plain-modal <@- backgroundClass @>" tabindex="-1" aria-live="assertive" role="dialogue">
                                                    <div class="sr-only">Dialog Content Starts</div>
                                                    <div class="modal-dialog <@- modalClass @>" >
                                                        <div class="modal-content" role="alert">
                                                            <div class="modal-header">
                                                                <div class="hidden-xs well-icon" style="background:url(//static.mettl.com/resources/images/<@- icon @>) no-repeat" ></div>
                                                                <h2 class="popup-title font-bold font-medium m-0"><@</h2>
                                                            </div>
                                                            <@{ @>
                    <div class="modal-body overflowY-auto" style="max-height: <@- modalBodyMaxHeight @>px" >
                                                                <div class="popup-body"><@</div>
                                                            </div>
                                                            <@ } @>
                <div class="modal-footer text-center">
                                                                <@{ @>
                        <button type="button" class="btn btn-default" data-name="<@- action @>"><@</button>
                                                                <@ }); @>
                </div>
                                                        </div>
                                                    </div>
                                                    <div class="sr-only">Dialog Content Ends</div>
                                                </div>
                                            </script>

                                            <script type="text/template" id="failed-client-network-template">
                                                <ul aria-live="assertive" role="alert">
                                                    <li class="_client">
                                                        <p>
                                                            <strong class='text-danger'><@</strong>
                                                            <span><@</span><strong class='red'> <@</strong> <span> <@</span>
                                                            <strong class='text-danger'> <@</strong>
                                                        </p>
                                                        <p><button type="button" class="btn btn-primary"><@</button></p>
                                                    </li>
                                                    <li class="_server muted"><@</li>
                                                </ul>
                                            </script>

                                            <script type="text/template" id="custom-network-error-template">
                                                <div class="rr-popup">
                                                    <div role="alert" aria-live="polite" class="rr-popup-network-right">
                                                        <ol>
                                                            <li class="_client"><@</li>
                                                            <li class="_server muted"><@</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </script>

                                            <script type="text/template" id="client-connected-to-internet-template">
                                                <ul aria-live="assertive" role="alert">
                                                    <li class="_client">
                                                        <strong class='text-success'><@</strong>
                                                    </li>
                                                    <li class="_server"><@</li>
                                                </ul>
                                            </script>

                                            <script type="text/template" id="client-connect-second-attempt-template">
                                                <span><@<span class="_attempt"><@</span>)<@</span>
                                                <span id='client-network-Timer'></span>
                                            </script>

                                            <script type="text/template" id="server-connect-failure-template">
                                                <span><@</span>
                                                <br />
                                                <br />
                                                <span class='text-danger'><@</span>
                                                <@= TEST_SERVER_CONNECTION_FAIL_MSG_3 @>
    <br />
                                                <br />
                                                <span class='text-danger'><@</span>
                                            </script>


                                            <script type="text/template" id="internet-connection-issue-template">
                                                <div class="row">
                                                    <div class="col-md-6 rr-popup-network-left">
                                                        <ul>
                                                            <li><span class="text-danger"><@</span> <@</li>
                                                            <li>
                                                                <@= TEST_INTERNET_CONNECTION_MSG_3 @>
                    <br />
                                                                <span class="text-danger"><@</span>
                                                            </li>
                                                            <li><@</li>
                                                        </ul>
                                                    </div>
                                                    <div class="col-md-6 rr-popup-network-right">
                                                        <ul>
                                                            <li class="_client"><@</li>
                                                            <li class="_server muted"><@</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </script>

                                            <script type="text/template" id="connection-restored-template">
                                                <strong class='text-success'><@</strong>
                                                <br />
                                                <@= RR_CONNECTION_RESTORED_TEXT_2 @>
    <input type='hidden' class='btn' id='resume' Value='<@= RGTN_BCM_RESUME @>' />
                                            </script>


                                            <script type="text/template" id="server-connect-second-attempt-template">
                                                <span><@</span> <span id='server-network-Timer'></span>
                                            </script>

                                            <script type="text/template" id="finishtest-network-error-template">
                                                <div class="rr-popup">
                                                    <div role="alert" aria-live="polite" class="rr-popup-network-right">
                                                        <p><@</p>
                                                        <ol>
                                                            <li class="_client"><@</li>
                                                            <li class="_server muted"><@</li>
                                                        </ol>
                                                    </div>
                                                </div>
                                            </script>

                                            <script type="text/template" id="section-time-over-template">
                                                <div class="_section-time-over-wrapper">
                                                    <@{ @>
            <p><@</p>
                                                    <@{ @>
            <p><@<span id='section-timer'></span> sec.</p>
                                                    <@ } @>

        <@{ @>
             <@{ @>
                <div class="radio">
                                                        <label><input type="radio" name="sectionSelector" < <@<@<@</label>
                                                    </div>
                                                    <@ } @>
        <@ }); @>

        <@{ @>
            <p><@</p>
                                                    <@ } @>

        <@{@>
            <@= extraMessage@>
        <@}@>
    </div>
                                            </script>

                                            <script type="text/template" id="proctoring-monitored-session-template">
                                                <div class="row">
                                                    <div class="col-md-3 col-xs-12 pull-right monitored-session-right">
                                                        <img src='//static.mettl.com/resources/images/proctoring/camera.png?v=160.0.50.20200528.181543' alt="">
        </div>
                                                        <div class="col-md-9 col-xs-12 pull-right monitored-session-left">
                                                            <p class="font-medium">
                                                                <strong class="_i18" data-i18="MONITORED_SESSION_POPUP_TITLE"></strong>
                                                            </p>
                                                            <p class="_i18" data-i18="MONITORED_SESSION_POPUP_MSG"></p>
                                                        </div>
                                                    </div>
</script>

                                                <script type="text/template" id="mic-mute-warning-template">
                                                    <div class="row">
                                                        <div class="col-md-12">
                                                            <p class="_i18" data-i18="MIC_MUTE_FOUND_MSG"></p>
                                                            <br />

                                                            <@{ @>
            <p class="_i18" data-i18="MIC_MUTED_LAST_WARNING_MSG"></p>
                                                            <br />
                                                            <@ } @>

            <@{ @>
                <p id="mic-muted-timer-msg" class="text-muted text-center micMutePopuptext">
                                                                <img src='//static.mettl.com/resources/images/proctoring/loader-grey.gif?v=160.0.50.20200528.181543' alt="loader"> <span class="_i18" data-i18="MIC_MUTE_TIMER_MSG"></span> <span id='mic-mute-attempt-timer'></span> <span class="_i18" data-i18="SECONDS_TEXT"></span> 
                </p>
                                                                <@{ @>
                <p class="text-muted text-center micMutePopuptext">
                                                                    <img src='//static.mettl.com/resources/images/proctoring/loader-grey.gif?v=160.0.50.20200528.181543' alt="loader">
                                                                        <br />
                                                                        <br />
                                                                        <span class="_i18" data-i18="TEST_CODE_TEXT_22"></span>
                </p>
                                                                    <@{ @>
                <p class="text-warning text-center">
                                                                        <span class="icons-small-media-recording warning-banner-icon"></span>
                                                                        <span class="_i18" data-i18="MIC_MUTED_ALERT_MSG"></span>
                                                                    </p>
                                                                    <@{ @>
                <p class="text-success text-center micMutePopuptext">
                                                                        <span class="icons-small-media-recording rec-submitted-banner-icon"></span>
                                                                        <span class="_i18" data-i18="MIC_UNMUTED_TEXT"></span>
                                                                    </p>
                                                                    <@ } @>
        </div>
    </div>
</script>

                                                        <script type="text/javascript">



                                                            window.isMettlResourceLoaded = false;
        var _timer = setTimeout(function(){
            if(!window.isMettlResourceLoaded){
                                                                alert("error in downloading required files, please reload.");
                window.location.reload();
            }
        }, 3*60*1000);


</script>

                                                        <script type="text/javascript">
                                                            $(document).ready(function() {
        var dom = $('body').find("._i18");
        dom.each(function (){
            var $this = $(this);
            var attr = $this.attr("data-i18");
            $this.html(window.LanguageMap[attr]);
        });
    });
</script>

                                                        <input type="hidden" id="previewDataKey" value="">


                                                            <script type="text/javascript">
                                                                var _gaq = _gaq || [];
                                                                _gaq.push(['_setAccount', ga_tracking_id]);
                                                                _gaq.push(['_setDomainName', 'none']);
                                                                _gaq.push(['_setSiteSpeedSampleRate', 100]);
                                                                _gaq.push(['_setAllowLinker', true]);
                                                                _gaq.push(['_trackPageview']);

    (function () {
        var ga = document.createElement('script');
        ga.type = 'text/javascript';
        ga.async = true;
        ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(ga, s);
    })();
</script>

                                                            <script type="text/javascript">

                                                                Mettl.initSupportNumber = function () {
                                                                    setTimeout(function () {
                                                                        try {
                                                                            var dom = $("#footer ._supportNumber");
                                                                            dom.intlTelInput();
                                                                            // hack for tally solutions
                                                                            var clientId = "120884";
                                                                            if (clientId == 52 || clientId == 20777) {
                                                                                dom.val(dom.val().replace("+91 ", ""));
                                                                            }
                                                                        } catch (e) {
                                                                            if (console && console.log)
                                                                                console.log("Could not intialize support number");
                                                                        }
                                                                    }, 100);
    };

    Mettl.initSupportNumber();

    Mettl.getLanguageAttribute = function(){
        var lang = "English";
        var $html = $("html");
        switch(lang){
            case "English" :
                $html.attr("lang", 'en');
                break;
            case "French" :
                $html.attr("lang", 'fr');
                break;
            case "Turkish" :
                $html.attr("lang", 'tr');
                break;
            case "Arabic" :
                $html.attr("lang", 'ar');
                break;
            case "Bulgarian" :
                $html.attr("lang", 'bg');
                break;
            case "Croatian" :
                $html.attr("lang", 'hr');
                break;
           case "Czech" :
                $html.attr("lang", 'cs');
                break;
           case "Portuguese" :
                $html.attr("lang", 'pt');
                break;
           case "Eu_Portuguese" :
                $html.attr("lang", 'pt');
                break;
           case "Spanish" :
                $html.attr("lang", 'es');
                break;
           case "Eu_Spanish" :
                $html.attr("lang", 'es');
                break;
           case "German" :
                $html.attr("lang", 'de');
                break;
           case "Hindi" :
                $html.attr("lang", 'hi');
                break;
           case "Hungarian" :
                $html.attr("lang", 'hu');
                break;
           case "Italian" :
                $html.attr("lang", 'it');
                break;
           case "Japanese" :
                $html.attr("lang", 'ja');
                break;
           case "Korean" :
                $html.attr("lang", 'ko');
                break;
           case "Serbian" :
                $html.attr("lang", 'sr');
                break;
           case "Slovak" :
                $html.attr("lang", 'sk');
                break;
           case "Urdu" :
                $html.attr("lang", 'ur');
                break;
           case "Vietnamese" :
                $html.attr("lang", 'vi');
                break;
           case "Thai" :
                $html.attr("lang", 'th');
                break;
           case "Polish" :
                $html.attr("lang", 'pl');
                break;
           default :
                $html.attr("lang", 'en');
                break;
           }
        };
    Mettl.getLanguageAttribute();

</script>





                                                            <div class="monaco-aria-container"><div class="monaco-alert" role="alert" aria-atomic="true" style="visibility: visible;">Accepting 'lastIndex' did insert the following text: lastIndex</div><div class="monaco-status" role="status" aria-atomic="true"></div></div></body>